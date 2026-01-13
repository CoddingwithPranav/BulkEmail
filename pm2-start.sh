#!/bin/bash

# PM2 Start Script for MessangerNepal
# Use this script to start all processes with PM2

set -e

echo "🚀 Starting all PM2 processes..."

# Start all apps using ecosystem config
pm2 start ecosystem.config.js

# Save the PM2 process list
echo "💾 Saving PM2 process list..."
pm2 save

# Display status
echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "✅ All processes started successfully!"
echo ""
echo "💡 Useful PM2 commands:"
echo "  pm2 status              - View all processes"
echo "  pm2 logs                - View all logs"
echo "  pm2 logs [app-name]     - View logs for specific app"
echo "  pm2 restart all         - Restart all processes"
echo "  pm2 stop all            - Stop all processes"
echo "  pm2 delete all          - Delete all processes"
echo "  pm2 monit               - Monitor processes"
