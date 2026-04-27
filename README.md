# Setup Database Connection

Run bastion host on port 3307 before executing Prisma commands.

# Generate Prisma files

npx prisma generate --config ./prisma.config.ts

# Prisma migration commands

## Local development only (safe to reset)

Use this for local/dev databases where data can be recreated.

npx prisma migrate dev --config ./prisma.config.ts

Note: `migrate dev` can ask to reset the database if Prisma detects migration drift or history mismatch. Reset will drop data.

## Staging/production (do not reset)

Use this for shared databases with real data.

npx prisma migrate deploy --config ./prisma.config.ts

Do not run `migrate dev` against staging/production.

## Staging-only workflow (if you do not have a local DB)

If staging is your only database, use this no-reset flow instead of `migrate dev`.

Why this flow:
- `migrate dev` can ask for reset when drift is detected.
- This flow generates SQL from current staging to your schema, applies it safely, and then records migration history.

1. Update `schema.prisma`.
2. Create a migration folder (replace the timestamp and name):

mkdir -p migrations/20260427140000_ballers_migration_44

3. Generate SQL diff from current staging DB to schema:

npx prisma migrate diff --from-config-datasource --to-schema ./schema.prisma --script --config ./prisma.config.ts > migrations/20260427140000_ballers_migration_44/migration.sql

4. Review `migration.sql` before applying.
5. Apply SQL without reset:

npx prisma db execute --config ./prisma.config.ts --file migrations/20260427140000_ballers_migration_44/migration.sql

6. Mark migration as applied:

npx prisma migrate resolve --applied 20260427140000_ballers_migration_44 --config ./prisma.config.ts

7. Verify status:

npx prisma migrate status --config ./prisma.config.ts

8. Commit:

git add schema.prisma migrations/20260427140000_ballers_migration_44/migration.sql
git commit -m "Add migration 44"

Safety notes:
- Always confirm you are connected to the intended database.
- Review SQL for destructive operations before applying.
- Keep backups/snapshots for staging before major changes.

# After logging in with the npm try runing this command to publish on npm

npm publish --access=public
