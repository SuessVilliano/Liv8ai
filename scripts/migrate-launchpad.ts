import { readFile } from 'node:fs/promises';
import { database } from '../server/launchpad-db';
const sql=database();
const statements=(await readFile(new URL('./launchpad-schema.sql',import.meta.url),'utf8')).split(';').map(s=>s.trim()).filter(Boolean);
await sql.transaction(statements.map(statement=>sql(statement)));
console.log('Launchpad additive migration complete');
