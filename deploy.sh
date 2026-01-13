#!/bin/bash

# Deploy script for MessangerNepal
# This script handles the deployment process on the Azure VM

set -e

echo "🚀 Starting deployment..."

# Navigate to project directory
cd ~/projects/BulkEmail

# Pull latest changes
echo "📥 Pulling latest changes from git..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Build all applications
echo "🔨 Building applications..."
pnpm run build

# Start/Restart PM2 processes
echo "🔄 Restarting PM2 processes..."
pm2 restart ecosystem.config.js --update-env

# Save PM2 process list
echo "💾 Saving PM2 process list..."
pm2 save

echo "✅ Deployment completed successfully!"
echo ""
echo "📊 PM2 Status:"
pm2 status
