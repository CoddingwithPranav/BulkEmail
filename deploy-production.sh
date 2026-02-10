#!/bin/bash

################################################################################
# Production Deployment Script for BulkEmail Application
################################################################################
# This script:
# - Syncs environment variables
# - Installs dependencies
# - Builds all applications
# - Deploys with PM2 process manager
# - Verifies health of all services
# - Retries failed services
################################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
MAX_RETRIES=3
RETRY_DELAY=5
HEALTH_CHECK_TIMEOUT=30

# Ports from nginx.conf and ecosystem.config.js
API_PORT=8000
WEB_PORT=3001

################################################################################
# Helper Functions
################################################################################

print_step() {
    echo -e "${BLUE}==>${NC} ${1}"
}

print_success() {
    echo -e "${GREEN}✓${NC} ${1}"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} ${1}"
}

print_error() {
    echo -e "${RED}✗${NC} ${1}"
}

check_command() {
    if ! command -v "$1" &> /dev/null; then
        print_error "$1 is not installed. Please install it first."
        exit 1
    fi
}

wait_for_port() {
    local port=$1
    local service_name=$2
    local timeout=$3
    local elapsed=0

    print_step "Waiting for $service_name on port $port..."
    
    while [ $elapsed -lt $timeout ]; do
        if nc -z localhost $port 2>/dev/null; then
            print_success "$service_name is responding on port $port"
            return 0
        fi
        sleep 2
        elapsed=$((elapsed + 2))
        echo -n "."
    done
    
    echo ""
    print_error "$service_name failed to respond on port $port after ${timeout}s"
    return 1
}

check_service_health() {
    local port=$1
    local service_name=$2
    local endpoint=${3:-"/"}
    
    print_step "Checking health of $service_name..."
    
    if curl -f -s -o /dev/null -w "%{http_code}" "http://localhost:$port$endpoint" &> /dev/null; then
        print_success "$service_name is healthy"
        return 0
    else
        print_warning "$service_name health check failed"
        return 1
    fi
}

restart_pm2_app() {
    local app_name=$1
    local attempt=$2
    
    print_warning "Restarting $app_name (attempt $attempt/$MAX_RETRIES)..."
    pm2 restart "$app_name" --update-env
    sleep $RETRY_DELAY
}

################################################################################
# Pre-flight Checks
################################################################################

print_step "Starting Production Deployment"
echo ""

print_step "Checking required commands..."
check_command "node"
check_command "pnpm"
check_command "pm2"
check_command "nc"
check_command "curl"
print_success "All required commands are available"
echo ""

################################################################################
# Environment Setup
################################################################################

print_step "Setting up environment..."

# Check if .env file exists
if [ ! -f ".env" ]; then
    print_error ".env file not found!"
    if [ -f ".env.example" ]; then
        print_warning "Copying .env.example to .env"
        cp .env.example .env
        print_error "Please update .env with your production values and run this script again"
        exit 1
    else
        print_error "No .env.example found. Cannot proceed."
        exit 1
    fi
fi

# Sync environment variables to all apps
print_step "Syncing environment variables to all apps..."
if pnpm run sync-env; then
    print_success "Environment variables synced"
else
    print_error "Failed to sync environment variables"
    exit 1
fi
echo ""

################################################################################
# Install Dependencies
################################################################################

print_step "Installing dependencies..."
if pnpm install --frozen-lockfile; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi
echo ""

################################################################################
# Build Applications
################################################################################

print_step "Building all applications..."
if pnpm run build; then
    print_success "All applications built successfully"
else
    print_error "Build failed"
    exit 1
fi
echo ""

################################################################################
# Create Logs Directory
################################################################################

print_step "Setting up logs directory..."
mkdir -p logs
print_success "Logs directory ready"
echo ""

################################################################################
# Stop Existing PM2 Processes
################################################################################

print_step "Stopping existing PM2 processes..."
if pm2 list | grep -q "online"; then
    pm2 stop all || true
    print_success "Stopped all running processes"
else
    print_warning "No running processes found"
fi
echo ""

################################################################################
# Start PM2 Processes
################################################################################

print_step "Starting PM2 processes with ecosystem config..."
if pm2 start ecosystem.config.js --update-env; then
    print_success "PM2 processes started"
else
    print_error "Failed to start PM2 processes"
    exit 1
fi
echo ""

# Give services time to initialize
print_step "Waiting for services to initialize..."
sleep 5
echo ""

################################################################################
# Verify Services
################################################################################

print_step "Verifying services..."
echo ""

# Track failed services
FAILED_SERVICES=()

# Check API service
print_step "Checking API service (port $API_PORT)..."
if wait_for_port $API_PORT "API" $HEALTH_CHECK_TIMEOUT; then
    if check_service_health $API_PORT "API" "/api/health"; then
        print_success "API service is running correctly"
    else
        FAILED_SERVICES+=("api")
    fi
else
    FAILED_SERVICES+=("api")
fi
echo ""

# Check Web service
print_step "Checking Web service (port $WEB_PORT)..."
if wait_for_port $WEB_PORT "Web" $HEALTH_CHECK_TIMEOUT; then
    if check_service_health $WEB_PORT "Web" "/"; then
        print_success "Web service is running correctly"
    else
        FAILED_SERVICES+=("web")
    fi
else
    FAILED_SERVICES+=("web")
fi
echo ""

# Check Worker services (they don't have ports, just check if PM2 process is running)
print_step "Checking Worker services..."
if pm2 show worker-file-processor | grep -q "online"; then
    print_success "File processor worker is running"
else
    FAILED_SERVICES+=("worker-file-processor")
fi

if pm2 show worker-send-email | grep -q "online"; then
    print_success "Email worker is running"
else
    FAILED_SERVICES+=("worker-send-email")
fi
echo ""

################################################################################
# Retry Failed Services
################################################################################

if [ ${#FAILED_SERVICES[@]} -gt 0 ]; then
    print_warning "Some services failed to start properly. Attempting retries..."
    echo ""
    
    for service in "${FAILED_SERVICES[@]}"; do
        retry_count=1
        service_ok=false
        
        while [ $retry_count -le $MAX_RETRIES ] && [ "$service_ok" = false ]; do
            restart_pm2_app "$service" $retry_count
            
            # Re-check the service
            if [ "$service" = "api" ]; then
                if wait_for_port $API_PORT "API" $HEALTH_CHECK_TIMEOUT && check_service_health $API_PORT "API" "/api/health"; then
                    service_ok=true
                fi
            elif [ "$service" = "web" ]; then
                if wait_for_port $WEB_PORT "Web" $HEALTH_CHECK_TIMEOUT && check_service_health $WEB_PORT "Web" "/"; then
                    service_ok=true
                fi
            else
                # For workers, just check PM2 status
                if pm2 show "$service" | grep -q "online"; then
                    service_ok=true
                fi
            fi
            
            if [ "$service_ok" = true ]; then
                print_success "$service recovered successfully"
                break
            fi
            
            retry_count=$((retry_count + 1))
        done
        
        if [ "$service_ok" = false ]; then
            print_error "$service failed to start after $MAX_RETRIES retries"
        fi
    done
    echo ""
fi

################################################################################
# Save PM2 Configuration
################################################################################

print_step "Saving PM2 process list..."
pm2 save
print_success "PM2 configuration saved"
echo ""

################################################################################
# Display Status
################################################################################

print_step "Deployment Summary"
echo ""
pm2 status
echo ""
pm2 logs --lines 10 --nostream
echo ""

################################################################################
# Final Health Check
################################################################################

print_step "Final health check..."
ALL_HEALTHY=true

# Check if all critical services are online
if ! pm2 show api | grep -q "online"; then
    print_error "API is not running"
    ALL_HEALTHY=false
fi

if ! pm2 show web | grep -q "online"; then
    print_error "Web is not running"
    ALL_HEALTHY=false
fi

if ! pm2 show worker-file-processor | grep -q "online"; then
    print_error "File processor worker is not running"
    ALL_HEALTHY=false
fi

if ! pm2 show worker-send-email | grep -q "online"; then
    print_error "Email worker is not running"
    ALL_HEALTHY=false
fi

echo ""

if [ "$ALL_HEALTHY" = true ]; then
    print_success "=========================================="
    print_success "  Deployment completed successfully! 🎉"
    print_success "=========================================="
    echo ""
    echo "Services:"
    echo "  • API:  http://localhost:$API_PORT"
    echo "  • Web:  http://localhost:$WEB_PORT"
    echo ""
    echo "Useful commands:"
    echo "  • pm2 status           - View all processes"
    echo "  • pm2 logs             - View all logs"
    echo "  • pm2 logs [name]      - View specific app logs"
    echo "  • pm2 restart all      - Restart all services"
    echo "  • pm2 monit            - Monitor in real-time"
    exit 0
else
    print_error "=========================================="
    print_error "  Deployment completed with errors! ⚠️"
    print_error "=========================================="
    echo ""
    echo "Please check the logs with: pm2 logs"
    echo "Check status with: pm2 status"
    exit 1
fi
