# Prisma DATABASE_URL Configuration Flow

## Local Development

```
┌─────────────────────────────────────────────────────────────┐
│  Developer runs app locally                                 │
│  $ pnpm dev                                                 │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  App imports: import { dbClient } from "@repo/db/client"   │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  packages/db/src/index.ts runs:                            │
│  config({ path: resolve(__dirname, "../../.env") })        │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  Loads DATABASE_URL from .env:                             │
│  "postgresql://admin:admin@localhost:5432/sms_platform"    │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  ✅ PrismaClient connects to localhost database             │
└─────────────────────────────────────────────────────────────┘
```

## Docker Environment

```
┌─────────────────────────────────────────────────────────────┐
│  Docker Compose starts services                            │
│  $ docker-compose up                                       │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  docker-compose.yml loads .env.docker:                     │
│  env_file:                                                 │
│    - .env.docker                                           │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  DATABASE_URL set in process.env BEFORE app starts:       │
│  "postgresql://admin:admin@postgres:5432/sms_platform"    │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  App starts and imports: import { dbClient }               │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  packages/db/src/index.ts runs:                            │
│  config({ path: resolve(__dirname, "../../.env") })        │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  dotenv sees DATABASE_URL already exists in process.env    │
│  ⚠️  Does NOT override it (dotenv default behavior)        │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  ✅ PrismaClient connects using DATABASE_URL from          │
│     docker-compose (postgres container)                    │
└─────────────────────────────────────────────────────────────┘
```

## Running Prisma CLI Commands

### Local Development

```bash
# Set DATABASE_URL in your shell
export DATABASE_URL="postgresql://admin:admin@localhost:5432/sms_platform"

# Run Prisma commands
pnpm --filter @repo/db generate
pnpm --filter @repo/db migrate:dev
pnpm --filter @repo/db studio
```

### Docker Environment

```bash
# Option 1: Execute inside running container
docker-compose exec api pnpm --filter @repo/db generate

# Option 2: Run as one-off command
docker-compose run --rm api pnpm --filter @repo/db migrate:deploy
```

## Key Points

1. **dotenv does NOT override existing environment variables** - This is why it works in Docker
2. **docker-compose's `env_file` loads vars BEFORE the app starts** - So DATABASE_URL is already set
3. **The .env file path (`../../.env`) still works in Docker** - The whole directory is mounted
4. **No code changes needed between local and Docker** - Same codebase works in both!

## File Structure

```
BulkEmail/
├── .env                      # Local development (localhost)
├── .env.docker              # Docker development (postgres container)
├── docker-compose.yml       # Loads .env.docker via env_file
└── packages/
    └── db/
        ├── src/
        │   └── index.ts     # Loads ../../.env via dotenv
        ├── prisma/
        │   └── schema.prisma # Uses env("DATABASE_URL")
        └── package.json     # Scripts with --schema flag
```
