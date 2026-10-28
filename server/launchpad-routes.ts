import type { Express, Request, Response, NextFunction } from 'express';
import { randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual, createHash } from 'node:crypto';
import { promisify } from 'node:util';
import { z } from 'zod';
import { query } from './launchpad-db.js';
import { registrationSchema, profileSchema, saleSchema, postSchema, announcementSchema, challenges, lessons, reachedMilestones } from '../shared/launchpad.js';
const scrypt=promisify(scryptCallback);
const hash=(s:string)=>createHash('sha256').update(s).digest('hex');
const wrap=(fn:(req:Request,res:Response)=>Promise<any>)=>(req:Request,res:Response,next:NextFunction)=>{Promise.resolve(fn(req,res)).catch(next);};
export async function passwordHash(password:string){const salt=randomBytes(16).toString('hex');const key=await scrypt(password,salt,64) as Buffer;return `${salt}:${key.toString('hex')}`;}
export async function passwordMatches(password:string,encoded:string){const [salt,key]=encoded.split(':');if(!salt||!key)return false;const actual=await scrypt(password,salt,64) as Buffer;const expected=Buffer.from(key,'hex');return actual.length===expected.length&&timingSafeEqual(actual,expected);}
function token(req:Request){return /(?:^|;\s*)lp_session=([a-f0-9]{64})(?:;|$)/.exec(req.headers.cookie||'')?.[1];}
async function member(req:Request){const t=token(req);if(!t)return null;const rows=await query('SELECT m.id,m.email,m.profile,m.referral_code,m.created_at FROM lp_members m JOIN lp_sessions s ON s.member_id=m.id WHERE s.token_hash=$1 AND s.expires_at>now()',[hash(t)]);return rows[0]||null;}
async function session(res:Response,id:string){const t=randomBytes(32).toString('hex');await query("INSERT INTO lp_sessions(token_hash,member_id,expires_at) VALUES($1,$2,now()+interval '7 days')",[hash(t),id]);res.cookie('lp_session',t,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',maxAge:7*86400000,path:'/api/launchpad'});}
function admin(req:Request){const expected=process.env.LAUNCHPAD_ADMIN_TOKEN;const supplied=req.headers.authorization?.replace(/^Bearer /,'');return !!expected&&expected.length>=32&&!!supplied&&hash(expected)===hash(supplied);}
async function rate(req:Request,bucket:string,max=20){const ip=req.socket.remoteAddress||'unknown';const key=hash(`${bucket}:${ip}`);const rows=await query("INSERT INTO lp_rate_limits(key,hits,expires_at) VALUES($1,1,now()+interval '15 minutes') ON CONFLICT(key) DO UPDATE SET hits=CASE WHEN lp_rate_limits.expires_at<now() THEN 1 ELSE lp_rate_limits.hits+1 END,expires_at=CASE WHEN lp_rate_limits.expires_at<now() THEN now()+interval '15 minutes' ELSE lp_rate_limits.expires_at END RETURNING hits",[key]);return rows[0].hits<=max;}
export function registerLaunchpadRoutes(app:Express){
 const root='/api/launchpad';
 app.get(root+'/status',(_req,res)=>res.set('Cache-Control','no-store').json({accounts:!!process.env.DATABASE_URL,crm:!!(process.env.GHL_API_KEY&&process.env.GHL_LOCATION_ID),version:1}));
 app.use(root,(req,res,next)=>{res.set('Cache-Control','no-store');if(!['GET','HEAD','OPTIONS'].includes(req.method)){
  const origin=req.headers.origin;const allowed=process.env.LAUNCHPAD_ORIGIN||'https://www.liv8ai.com';
  if(origin&&origin!==allowed&&!(process.env.NODE_ENV!=='production'&&/^http:\/\/localhost:\d+$/.test(origin)))return res.status(403).json({message:'Request origin is not allowed'});
 }
 if(!process.env.DATABASE_URL)return res.status(503).json({message:'Member services are not connected yet. Use the personal workspace or contact LIV8 AI.'});next();});
 app.post(root+'/register',wrap(async(req,res)=>{
  const parsed=registrationSchema.safeParse(req.body);if(!parsed.success)return res.status(400).json({message:'Provide a valid email, a password of 12–128 characters, and your founder profile.'});
  if(!await rate(req,'register',5))return res.status(429).json({message:'Please try again later.'});
  const {email,password,profile,attribution}=parsed.data;const id=randomUUID();const referral=randomBytes(9).toString('hex');
  const referred=attribution?.ref?await query('SELECT id FROM lp_members WHERE referral_code=$1',[attribution.ref]):[];
  const rows=await query('INSERT INTO lp_members(id,email,password_hash,profile,referral_code,referred_by,attribution) VALUES($1,$2,$3,$4,$5,$6,$7) ON CONFLICT(email) DO NOTHING RETURNING id',[id,email,await passwordHash(password),JSON.stringify(profile),referral,referred[0]?.id||null,JSON.stringify(attribution||{})]);
  if(!rows.length)return res.status(409).json({message:'Unable to create account. Try signing in or contact support.'});
  await query('INSERT INTO lp_outbox(id,member_id,event,payload) VALUES($1,$2,$3,$4)',[randomUUID(),id,'founder_joined',JSON.stringify({email,profile,attribution:attribution||{}})]);
  await session(res,id);res.status(201).json({member:await member(req)||{id,email,profile,referral_code:referral}});
 }));
 app.post(root+'/login',wrap(async(req,res)=>{
  const parsed=z.object({email:z.string().email().max(254),password:z.string().min(1).max(128)}).safeParse(req.body);if(!parsed.success)return res.status(400).json({message:'Enter your email and password.'});
  if(!await rate(req,'login',15))return res.status(429).json({message:'Please try again later.'});
  const rows=await query('SELECT * FROM lp_members WHERE email=$1',[parsed.data.email.toLowerCase()]);
  const valid=await passwordMatches(parsed.data.password,rows[0]?.password_hash||'00000000000000000000000000000000:'+ '00'.repeat(64));
  if(!rows[0]||!valid)return res.status(401).json({message:'Email or password is incorrect.'});await session(res,rows[0].id);res.json({ok:true});
 }));
 app.post(root+'/logout',wrap(async(req,res)=>{const t=token(req);if(t)await query('DELETE FROM lp_sessions WHERE token_hash=$1',[hash(t)]);res.clearCookie('lp_session',{path:root});res.json({ok:true});}));
 app.use(root+'/admin',(req,res,next)=>admin(req)?next():res.status(401).json({message:'Operator authorization required'}));
 app.get(root+'/admin/analytics',wrap(async(_req,res)=>{const [members,sales,pending,referrals]=await Promise.all([query('SELECT count(*)::int AS count FROM lp_members'),query('SELECT count(*)::int AS count FROM lp_sales'),query("SELECT count(*)::int AS count FROM lp_outbox WHERE status!='sent'"),query('SELECT count(*)::int AS count FROM lp_members WHERE referred_by IS NOT NULL')]);res.json({members:members[0].count,selfReportedSales:sales[0].count,pendingCrmEvents:pending[0].count,referredSignups:referrals[0].count});}));
 app.get(root+'/admin/announcements',wrap(async(_req,res)=>res.json(await query('SELECT * FROM lp_announcements ORDER BY created_at DESC LIMIT 100'))));
 app.post(root+'/admin/announcements',wrap(async(req,res)=>{const a=announcementSchema.safeParse(req.body);if(!a.success)return res.status(400).json({message:'Valid announcement and official source required'});const id=randomUUID();await query('INSERT INTO lp_announcements(id,title,source_url,availability,summary) VALUES($1,$2,$3,$4,$5)',[id,a.data.title,a.data.sourceUrl,a.data.availability,a.data.summary]);res.status(201).json({id,status:'draft'});}));
 app.patch(root+'/admin/announcements/:id',wrap(async(req,res)=>{
  const p=z.object({status:z.enum(['draft','verified','published']),checks:z.object({source:z.boolean(),availability:z.boolean(),screenCapture:z.boolean(),links:z.boolean(),disclosure:z.boolean(),captions:z.boolean()}).strict()}).strict().safeParse(req.body);
  if(!p.success)return res.status(400).json({message:'Validation checklist required'});
  if(p.data.status!=='draft'&&!Object.values(p.data.checks).every(Boolean))return res.status(422).json({message:'Complete every validation check before approval'});
  const rows=await query('UPDATE lp_announcements SET status=$2,checks=$3 WHERE id=$1 RETURNING id,status',[req.params.id,p.data.status,JSON.stringify(p.data.checks)]);if(!rows.length)return res.sendStatus(404);res.json(rows[0]);
 }));
 app.get(root+'/admin/moderation',wrap(async(_req,res)=>res.json(await query("SELECT p.*,m.profile->>'name' AS name FROM lp_posts p JOIN lp_members m ON m.id=p.member_id WHERE p.status='pending' ORDER BY p.created_at LIMIT 100"))));
 app.patch(root+'/admin/posts/:id',wrap(async(req,res)=>{const p=z.object({status:z.enum(['published','rejected'])}).strict().safeParse(req.body);if(!p.success)return res.sendStatus(400);const rows=await query('UPDATE lp_posts SET status=$2 WHERE id=$1 RETURNING id,status',[req.params.id,p.data.status]);res.status(rows.length?200:404).json(rows[0]||{message:'Not found'});}));
 app.post(root+'/admin/sync-crm',wrap(async(_req,res)=>{
  if(!process.env.GHL_API_KEY||!process.env.GHL_LOCATION_ID)return res.status(503).json({message:'HighLevel server credentials are not configured'});
  // Claim rows atomically; failures remain explicit and can be retried by an operator.
  const rows=await query("UPDATE lp_outbox SET status='processing',attempts=attempts+1 WHERE id IN (SELECT id FROM lp_outbox WHERE status IN ('pending','failed') AND attempts<5 ORDER BY created_at LIMIT 3 FOR UPDATE SKIP LOCKED) RETURNING *");
  let sent=0;for(const row of rows){try{
    const members=await query('SELECT email,profile FROM lp_members WHERE id=$1',[row.member_id]);const m=members[0];
    const response=await fetch('https://services.leadconnectorhq.com/contacts/upsert',{method:'POST',headers:{Authorization:`Bearer ${process.env.GHL_API_KEY}`,Version:'2021-07-28','Content-Type':'application/json'},body:JSON.stringify({locationId:process.env.GHL_LOCATION_ID,email:m.email,name:m.profile.name,source:'LIV8 AI Founders Launchpad',tags:['liv8-founder',...(m.profile.emailConsent?['liv8-email-opt-in']:[])]}),signal:AbortSignal.timeout(12000)});
    if(!response.ok)throw new Error(`HighLevel HTTP ${response.status}`);
    await query("UPDATE lp_outbox SET status='sent',error=NULL WHERE id=$1",[row.id]);sent++;
   }catch(e){await query("UPDATE lp_outbox SET status='failed',error=$2 WHERE id=$1",[row.id,e instanceof Error?e.message:'Sync failed']);}}
  res.json({sent,failed:rows.length-sent});
 }));
 app.use(root,(req,res,next)=>{member(req).then(m=>{if(!m){res.status(401).json({message:'Sign in to use member services.'});return;}res.locals.member=m;next();}).catch(next);});
 app.get(root+'/me',wrap(async(_req,res)=>{const m=res.locals.member;const [sales,progress,referrals]=await Promise.all([query('SELECT id,label,occurred_at FROM lp_sales WHERE member_id=$1 ORDER BY occurred_at DESC LIMIT 1000',[m.id]),query('SELECT item_id FROM lp_progress WHERE member_id=$1',[m.id]),query('SELECT count(*)::int AS count FROM lp_members WHERE referred_by=$1',[m.id])]);res.json({member:m,sales,progress:progress.map(p=>p.item_id),referrals:referrals[0].count,milestones:reachedMilestones(sales.length)});}));
 app.patch(root+'/profile',wrap(async(req,res)=>{const p=profileSchema.safeParse(req.body);if(!p.success)return res.status(400).json({message:'Invalid founder profile'});await query('UPDATE lp_members SET profile=$2 WHERE id=$1',[res.locals.member.id,JSON.stringify(p.data)]);res.json({ok:true});}));
 app.post(root+'/sales',wrap(async(req,res)=>{const p=saleSchema.safeParse(req.body);if(!p.success)return res.status(400).json({message:'Valid sale reference and date required'});if(Date.parse(p.data.occurredAt)>Date.now()+60000)return res.status(400).json({message:'A sale cannot be in the future'});const rows=await query('INSERT INTO lp_sales(id,member_id,external_id,label,occurred_at) VALUES($1,$2,$3,$4,$5) ON CONFLICT(member_id,external_id) DO NOTHING RETURNING id',[randomUUID(),res.locals.member.id,p.data.externalId,p.data.label,p.data.occurredAt]);res.status(rows.length?201:200).json({created:!!rows.length});}));
 app.delete(root+'/sales/:id',wrap(async(req,res)=>{await query('DELETE FROM lp_sales WHERE id=$1 AND member_id=$2',[req.params.id,res.locals.member.id]);res.json({ok:true});}));
 app.put(root+'/progress/:id',wrap(async(req,res)=>{const valid=[...lessons,...challenges].some(x=>x.id===req.params.id);if(!valid||typeof req.body.completed!=='boolean')return res.status(400).json({message:'Valid lesson or challenge required'});if(req.body.completed)await query('INSERT INTO lp_progress(member_id,item_id) VALUES($1,$2) ON CONFLICT DO NOTHING',[res.locals.member.id,req.params.id]);else await query('DELETE FROM lp_progress WHERE member_id=$1 AND item_id=$2',[res.locals.member.id,req.params.id]);res.json({ok:true});}));
 app.get(root+'/posts',wrap(async(req,res)=>{const channel=z.enum(['introductions','build-in-public','ask-for-help','wins']).safeParse(req.query.channel);if(!channel.success)return res.sendStatus(400);res.json(await query("SELECT p.id,p.body,p.channel,p.created_at,m.profile->>'name' AS name FROM lp_posts p JOIN lp_members m ON m.id=p.member_id WHERE p.channel=$1 AND p.status='published' ORDER BY p.created_at DESC LIMIT 50",[channel.data]));}));
 app.post(root+'/posts',wrap(async(req,res)=>{const p=postSchema.safeParse(req.body);if(!p.success)return res.status(400).json({message:'Choose a channel and write 5–2000 characters'});if(!await rate(req,'post',10))return res.sendStatus(429);const id=randomUUID();await query('INSERT INTO lp_posts(id,member_id,channel,body) VALUES($1,$2,$3,$4)',[id,res.locals.member.id,p.data.channel,p.data.body]);res.status(201).json({id,status:'pending',message:'Submitted for moderation.'});}));
 app.use(root,(err:unknown,_req:Request,res:Response,_next:NextFunction)=>{console.error('Launchpad request failed');res.status(500).json({message:'Unable to complete the request. Please try again or contact support.'});});
}
