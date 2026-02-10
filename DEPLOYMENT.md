# Deployment Guide

## Production Deployment Script

The `deploy-production.sh` script handles complete production deployment with automatic retries and health checks.

### What it does:

1. **Pre-flight checks** - Verifies all required tools (node, pnpm, pm2, nc, curl)
2. **Environment setup** - Syncs `.env` to all apps
3. **Install dependencies** - Runs `pnpm install --frozen-lockfile`
4. **Build applications** - Compiles all apps using `pnpm run build`
5. **Deploy with PM2** - Starts all services using `ecosystem.config.js`
6. **Health checks** - Verifies each service is responding
7. **Auto-retry** - Attempts to restart failed services (up to 3 times)
8. **Verification** - Final check of all services

### Usage:

```bash
# Make executable (first time only)
chmod +x deploy-production.sh

# Run deployment
./deploy-production.sh
```

### Services & Ports:

Based on `nginx.conf` and `ecosystem.config.js`:

| Service | Port | Proxied Through Nginx |
|---------|------|----------------------|
| API (Express) | 8000 | `/api/*` |
| Web (Next.js) | 3001 | `/*` |
| Worker: File Processor | - | Background worker |
| Worker: Email Sender | - | Background worker |

### Features:

- ✅ Automatic environment variable synchronization
- ✅ Dependency installation with frozen lockfile
- ✅ Complete build process
- ✅ PM2 cluster mode for API and Web
- ✅ Health checks for all services
- ✅ Up to 3 retry attempts for failed services
- ✅ Color-coded output for easy monitoring
- ✅ Detailed logging to PM2 log files
- ✅ Automatic PM2 configuration save
- ✅ Auto-restart on crashes (configured in ecosystem.config.js)

### PM2 Configuration:

The `ecosystem.config.js` includes:
- **Cluster mode** for API and Web (scalable)
- **Fork mode** for workers (single instance)
- **Auto-restart** on crashes
- **Max 10 restarts** before giving up
- **Memory limits** (500MB for API/workers, 1GB for Web)
- **Log rotation** with timestamps
- **Graceful restarts** with update-env

### Troubleshooting:

If deployment fails:

```bash
# Check PM2 status
pm2 status

# View logs for all services
pm2 logs

# View logs for specific service
pm2 logs api
pm2 logs web
pm2 logs worker-file-processor
pm2 logs worker-send-email

# Restart specific service
pm2 restart api

# Restart all services
pm2 restart all

# Stop all services
pm2 stop all

# Monitor in real-time
pm2 monit

# Delete all processes (clean slate)
pm2 delete all
```

### Environment Variables:

Ensure your `.env` file is properly configured with production values:

```bash
# Copy from example if needed
cp .env.example .env

# Edit with your production values
nano .env

# Then run sync
pnpm run sync-env
```

### Health Endpoints:

- **API Health**: `http://localhost:8000/api/health`
- **Web Health**: `http://localhost:3001/`
- **Nginx Health**: `https://bulkemail.pranavmishra.dev/health`

### Logs:

All logs are stored in the `./logs/` directory:
- `api-error.log` / `api-out.log`
- `web-error.log` / `web-out.log`
- `worker-file-error.log` / `worker-file-out.log`
- `worker-email-error.log` / `worker-email-out.log`

### Manual Deployment (without script):

If you prefer to run steps manually:

```bash
# 1. Sync environment
pnpm run sync-env

# 2. Install dependencies
pnpm install --frozen-lockfile

# 3. Build all apps
pnpm run build

# 4. Start with PM2
pm2 start ecosystem.config.js --update-env

# 5. Save PM2 config
pm2 save

# 6. Check status
pm2 status
```

### PM2 Startup on Boot:

To ensure services start automatically after server reboot:

```bash
# Generate startup script
pm2 startup

# Save current process list
pm2 save
```

### Updating After Code Changes:

```bash
# Pull latest changes
git pull origin main

# Run deployment script
./deploy-production.sh
```

The script will automatically rebuild and gracefully restart all services.
