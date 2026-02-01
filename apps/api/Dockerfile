# Development Dockerfile for Express API
FROM node:20-alpine

# Install native dependencies for bcrypt and other modules
RUN apk add --no-cache python3 make g++

RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

WORKDIR /app

# Copy workspace configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all workspace package.json files to install dependencies
COPY apps/api/package.json ./apps/api/
COPY apps/web/package.json ./apps/web/
COPY apps/worker-file-processor/package.json ./apps/worker-file-processor/
COPY apps/worker-send-email/package.json ./apps/worker-send-email/
COPY packages/config/package.json ./packages/config/
COPY packages/db/package.json ./packages/db/
COPY packages/email/package.json ./packages/email/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/pretter-config/package.json ./packages/pretter-config/
COPY packages/types/package.json ./packages/types/
COPY packages/typescript-config/package.json ./packages/typescript-config/
COPY packages/ui/package.json ./packages/ui/

# Copy Prisma schema for db package
COPY packages/db/prisma ./packages/db/prisma

# Install all dependencies
RUN pnpm install --frozen-lockfile


# Generate Prisma client
RUN cd packages/db && npx prisma generate

# Source code will be mounted via volumes

WORKDIR /app/apps/api

EXPOSE 8000

CMD ["pnpm", "dev"]
