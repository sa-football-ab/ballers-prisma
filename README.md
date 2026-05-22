# Setup Database Connection

Run bastion host on port 3307 before executing Prisma commands.

# Generate Prisma files

npx prisma generate --config ./prisma.config.ts

# Prisma migration commands

### Stage-only steps (safe workflow)

1. Edit `schema.prisma`.
2. Create a new migration folder:
   #TODO: Change the "ballers_migration_stage_01" to your new folder name

```bash
mkdir -p migrations/20260522_20260522_ballers_migration_stage_01
```

3. Generate the SQL diff:
   #TODO: Change the "ballers_migration_stage_01" to your new folder name

```bash
npx prisma migrate diff \
  --from-config-datasource \
  --to-schema ./schema.prisma \
  --script \
  --config ./prisma.config.ts \
  > migrations/20260522_ballers_migration_stage_01/migration.sql
```

4. Review the generated SQL:

```bash
cat migrations/20260522_ballers_migration_stage_01/migration.sql
```

5. Apply the SQL to the database:

```bash
npx prisma db execute --config ./prisma.config.ts --file migrations/20260522_ballers_migration_stage_01/migration.sql
```

6. Mark the migration as applied:

```bash
npx prisma migrate resolve --applied 20260522_ballers_migration_stage_01 --config ./prisma.config.ts
```

7. Confirm migration status:

```bash
npx prisma migrate status --config ./prisma.config.ts
```

8. Commit the changes:

```bash
git add schema.prisma migrations/20260522_add_description_here/migration.sql
git commit -m "Add migration 44"
```

### Notes for stage env

- Use a new folder name for each schema change.
- Keep old migration folders; they are the applied history.
- Do not delete old migrations unless you know what you are doing.
- If `prisma migrate status` says `Database schema is up to date!`, your migration history and database are consistent.

# After logging in with the npm try runing this command to publish on npm

npm publish --access=public
