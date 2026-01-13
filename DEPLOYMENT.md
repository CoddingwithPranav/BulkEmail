# Deployment Setup

This project includes automated deployment to Azure VM using GitHub Actions and PM2 process management.

## Files Created

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automated deployment
2. **`ecosystem.config.js`** - PM2 configuration for all processes
3. **`deploy.sh`** - Manual deployment script
4. **`pm2-start.sh`** - Script to start all PM2 processes

## Initial Azure VM Setup

Before the first deployment, SSH into your Azure VM and run:

```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm@9.0.0

# Install PM2
npm install -g pm2

# Clone repository
cd ~
git clone <your-repo-url> MessangerNepal
cd MessangerNepal

# Install dependencies
pnpm install

# Copy environment files
cp .env.example .env
# Edit .env files in each app as needed

# Build applications
pnpm run build

# Start PM2 processes
./pm2-start.sh

# Setup PM2 to start on system boot
pm2 startup
pm2 save
```

## GitHub Secrets Configuration

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- **`AZURE_VM_HOST`** - Your Azure VM IP address or hostname
- **`AZURE_VM_USERNAME`** - SSH username (e.g., `azureuser`)
- **`AZURE_VM_SSH_KEY`** - Private SSH key for authentication
- **`AZURE_VM_PORT`** - SSH port (optional, defaults to 22)

### Generating SSH Key

```bash
# On your local machine
ssh-keygen -t ed25519 -C "github-actions"

# Copy public key to Azure VM
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@your-vm-ip

# Copy private key content to GitHub secret
cat ~/.ssh/id_ed25519
```

## PM2 Process Management

### Start all processes
```bash
./pm2-start.sh
```

### View process status
```bash
pm2 status
```

### View logs
```bash
pm2 logs              # All processes
pm2 logs api          # API only
pm2 logs web          # Web only
```

### Restart processes
```bash
pm2 restart all
pm2 restart api       # Restart specific app
```

### Stop processes
```bash
pm2 stop all
pm2 stop api          # Stop specific app
```

### Monitor processes
```bash
pm2 monit
```

## Manual Deployment

To manually deploy from the Azure VM:

```bash
cd ~/MessangerNepal
./deploy.sh
```

## Automated Deployment

Every push to the `master` branch will automatically:
1. Checkout code
2. SSH into Azure VM
3. Pull latest changes
4. Install dependencies
5. Build all applications
6. Restart PM2 processes

## Applications Managed by PM2

- **api** - Express API server (port 3000)
- **web** - Next.js web application (port 3001)
- **worker-file-processor** - Background file processing worker
- **worker-send-email** - Background email sending worker

## Logs

All logs are stored in each app's `logs/` directory:
- API: `apps/api/logs/`
- Web: `apps/web/logs/`
- Workers: `apps/worker-*/logs/`
