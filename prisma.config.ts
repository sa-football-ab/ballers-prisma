import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "./schema.prisma",
  migrations: {
    path: "./migrations",
  },
  datasource: {
    // `env()` is strict; keep generate usable when DATABASE_URL is intentionally absent.
    url: env("DATABASE_URL"),
  },
});
