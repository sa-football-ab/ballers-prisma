# Setup Database Connection

Run bastion host on port 3307 before executing Prisma commands.

# Generate Prisma files

npx prisma generate --config ./prisma.config.ts

# Migrate prisma files

npx prisma migrate dev --config ./prisma.config.ts

# After logging in with the npm try runing this command to publish on npm

npm publish --access=public
