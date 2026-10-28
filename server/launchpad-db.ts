import { neon } from '@neondatabase/serverless';
export function database(){
 if(!process.env.DATABASE_URL) throw new Error('Launchpad database is not configured');
 return neon(process.env.DATABASE_URL);
}
export async function query(text:string,params:unknown[]=[]):Promise<any[]> {return database()(text,params) as Promise<any[]>;}
