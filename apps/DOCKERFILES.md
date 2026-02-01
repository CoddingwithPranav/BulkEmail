# Dockerfiles per Application

Each application has its own Dockerfile:

## Web App (Next.js)
- `apps/web/Dockerfile` - Production build with standalone output
- `apps/web/Dockerfile.dev` - Development with hot reload

## API (Express)
- `apps/api/Dockerfile` - Production build with esbuild bundling
- `apps/api/Dockerfile.dev` - Development with nodemon

## Workers
- `apps/worker-file-processor/Dockerfile` - Production TypeScript build
- `apps/worker-file-processor/Dockerfile.dev` - Development with tsx watch
- `apps/worker-send-email/Dockerfile` - Production TypeScript build
- `apps/worker-send-email/Dockerfile.dev` - Development with tsx watch

All Dockerfiles use multi-stage builds for optimal image sizes and build contexts from the monorepo root.
