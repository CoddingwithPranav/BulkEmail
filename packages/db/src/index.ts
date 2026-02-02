import { config } from "dotenv";
import { resolve } from "path";

// Load environment variables from root .env file if not already set
// In Docker, DATABASE_URL is already in process.env via docker-compose's env_file
// In local dev, this loads from .env file
// dotenv will not override existing environment variables
config({ path: resolve(__dirname, "../../.env") });

import { PrismaClient } from "../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const dbClient = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = dbClient;

export * from "../generated/client/client.js";
