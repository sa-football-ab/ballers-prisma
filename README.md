# Setup Database Connection

Run bastion host on port 3307 before executing Prisma commands.

# Generate Prisma files

npx prisma generate

# Migrate prisma files

npx prisma migrate dev

# After logging in with the npm try runing this command to publish on npm

npm publish --access=public
