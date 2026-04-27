import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type * as schema from './schema.js';

export type DrizzleDb = NodePgDatabase<typeof schema>;

export type DrizzleTx = Parameters<Parameters<DrizzleDb['transaction']>[0]>[0];
