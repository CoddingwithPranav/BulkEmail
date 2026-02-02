# @repo/db

Shared database package using Prisma ORM.

## Environment Variables

This package automatically loads environment variables from the root `.env` file (`../../.env`) when you import the database client in your code.

However, when running Prisma CLI commands **directly from this package directory**, you need to ensure the `DATABASE_URL` is available. You have two options:

### Option 1: Run from the monorepo root (Recommended)
```bash
# From the root directory
cd /path/to/BulkEmail
export DATABASE_URL="postgresql://admin:admin@localhost:5432/sms_platform?schema=public"

# Then run commands
pnpm --filter @repo/db generate
pnpm --filter @repo/db migrate:dev
pnpm --filter @repo/db studio
```

### Option 2: Set DATABASE_URL before running commands
```bash
# From the db package directory
cd packages/db
export DATABASE_URL="postgresql://admin:admin@localhost:5432/sms_platform?schema=public"

# Then run commands
pnpm generate
pnpm migrate:dev
pnpm studio
```

### Required Environment Variables
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Environment (development/production)

Example `.env` file in project root:
```env
DATABASE_URL="postgresql://admin:admin@localhost:5432/sms_platform?schema=public"
NODE_ENV=development
```

## Scripts

### Development
```bash
# Generate Prisma Client
pnpm generate

# Run migrations in development
pnpm migrate:dev

# Push schema changes without migrations
pnpm db:push

# Open Prisma Studio
pnpm studio

# Format schema file
pnpm format
```

### Production
```bash
# Deploy migrations
pnpm migrate:deploy
```

## Usage in Apps

Import the Prisma client from this package:

```typescript
import { dbClient } from "@repo/db/client";

// The database client is automatically configured with the correct DATABASE_URL
const users = await dbClient.user.findMany();
```

The database client will automatically load the `.env` file from the project root when imported, so you don't need to manually configure dotenv in your apps!

## Docker

**Yes, this works perfectly in Docker!** Here's how:

### How It Works in Docker

1. **docker-compose loads environment variables:**
   ```yaml
   # docker-compose.yml
   services:
     api:
       env_file:
         - .env.docker  # This loads DATABASE_URL into process.env
   ```

2. **The db package respects existing env vars:**
   - When the container starts, `DATABASE_URL` is already in `process.env` (from docker-compose)
   - The `dotenv.config()` call in `packages/db/src/index.ts` does NOT override existing environment variables
   - So the Docker-specific DATABASE_URL (with `postgres` as host) is preserved

3. **Result:** Your apps in Docker containers will use the correct DATABASE_URL from `.env.docker`

### Environment Files for Docker

**`.env.docker` (used by docker-compose):**
```env
DATABASE_URL="postgresql://admin:admin@postgres:5432/sms_platform?schema=public"
NODE_ENV=development
```

**Note:** In Docker, use the container name (`postgres`) as the database host, not `localhost`.

### Volume Mounts

The docker-compose.yml mounts the entire project directory (`- .:/app`), so the `.env` file is accessible inside containers, but since `DATABASE_URL` is already set via `env_file`, the dotenv call harmlessly attempts to load it without overriding.

### Running Prisma Commands in Docker

To run Prisma commands inside a Docker container:

```bash
# Generate Prisma Client
docker-compose exec api sh -c "cd /app/packages/db && pnpm generate"

# Run migrations
docker-compose exec api sh -c "cd /app/packages/db && pnpm migrate:dev"

# Open Prisma Studio (requires port mapping)
docker-compose exec api sh -c "cd /app/packages/db && pnpm studio"
```

Or run from the host using docker-compose's environment:
```bash
docker-compose run --rm api pnpm --filter @repo/db generate
docker-compose run --rm api pnpm --filter @repo/db migrate:deploy
```

## Schema Location

The Prisma schema is located at `./prisma/schema.prisma`. All Prisma commands explicitly reference this location using `--schema=./prisma/schema.prisma`.

## Troubleshooting

### "Environment variable not found: DATABASE_URL"

This error occurs when running Prisma CLI commands without setting the DATABASE_URL environment variable. Solutions:

1. **Export DATABASE_URL before running commands:**
   ```bash
   export DATABASE_URL="postgresql://admin:admin@localhost:5432/sms_platform?schema=public"
   pnpm generate
   ```

2. **Run from root with pnpm filter:**
   ```bash
   cd /path/to/BulkEmail
   export DATABASE_URL="..."
   pnpm --filter @repo/db generate
   ```

3. **Use a .env file in the package directory** (not recommended for production):
   Create `packages/db/.env` with DATABASE_URL for local development only.

### "Cannot find module '@prisma/client'"

Run `pnpm generate` to generate the Prisma Client.

### Different DATABASE_URL for Docker vs Local

- Local development: Use `localhost` as the host
- Docker development: Use `postgres` (the container name) as the host

The project has two .env files:
- `.env` - for local development
- `.env.docker` - for Docker development

