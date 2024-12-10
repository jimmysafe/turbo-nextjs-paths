import type { MigrateDownArgs, MigrateUpArgs } from "@payloadcms/db-sqlite";
import { sql } from "@payloadcms/db-sqlite";

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.run(sql`ALTER TABLE \`stores\` ADD \`city\` text;`);
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.run(sql`ALTER TABLE \`stores\` DROP COLUMN \`city\`;`);
}
