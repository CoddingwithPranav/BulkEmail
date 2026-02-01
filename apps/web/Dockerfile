# Development Dockerfile for Next.js Web App
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm@9.0.0

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

# Copy source files for shared packages that need to be built
COPY packages/config ./packages/config
COPY packages/types ./packages/types
COPY packages/db ./packages/db
COPY packages/email ./packages/email
COPY packages/typescript-config ./packages/typescript-config

# Build shared packages
RUN cd packages/config && pnpm build
RUN cd packages/types && pnpm build
RUN cd packages/db && pnpm build
RUN cd packages/email && pnpm build

# Source code will be mounted via volumes

WORKDIR /app/apps/web

EXPOSE 3000

CMD ["pnpm", "dev"]
