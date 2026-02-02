#!/bin/sh
set -e

echo "🚀 Starting API service..."

# Run migrations first
cd /app/packages/db
echo "🔄 Checking and applying database migrations..."
npx prisma migrate deploy --schema=./prisma/schema.prisma
echo "✅ Migrations completed"

# Start the API
cd /app/apps/api
exec pnpm dev
