#!/bin/bash

###############################################################################
# Environment Variable Synchronization Script
# 
# This script reads the root .env file and distributes the appropriate
# environment variables to each app and package based on their needs.
# 
# Usage:
#   ./sync-env.sh          # Use .env (local development)
#   ./sync-env.sh --docker # Use .env.docker (Docker containers)
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if --docker flag is passed
ENV_FILE=".env"
EXAMPLE_FILE=".env.example"
MODE="💻 Local"

if [[ "$*" == *"--docker"* ]]; then
    ENV_FILE=".env.docker"
    EXAMPLE_FILE=".env.docker.example"
    MODE="🐳 Docker"
fi

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_ENV_PATH="${SCRIPT_DIR}/${ENV_FILE}"
EXAMPLE_ENV_PATH="${SCRIPT_DIR}/${EXAMPLE_FILE}"

###############################################################################
# Environment variable mapping
###############################################################################

# Function to initialize environment mapping
init_env_map() {
    ENV_MAP["packages/db"]="DATABASE_URL,POSTGRES_DB,POSTGRES_USER,POSTGRES_PASSWORD,POSTGRES_PORT"
    ENV_MAP["apps/api"]="NODE_ENV,DATABASE_URL,REDIS_URL,REDIS_HOST,REDIS_PORT,PORT,API_PORT,JWT_SECRET,IMAGEKIT_PRIVATE_KEY,IMAGEKIT_PUBLIC_KEY,IMAGEKIT_URL_ENDPOINT,GMAIL_USER,GMAIL_APP_PASSWORD,ESEWA_SECRET_KEY,ESEWA_PRODUCT_CODE,CLIENT_URL,BACKEND_URL,FRONTEND_URL,UPLOADS_DIR"
    ENV_MAP["apps/web"]="NODE_ENV,WEB_PORT,NEXT_PUBLIC_API_URL,NEXT_PUBLIC_BACKEND_URL,NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,NEXT_PUBLIC_IMAGEKIT_URL"
    ENV_MAP["apps/worker-send-email"]="NODE_ENV,DATABASE_URL,REDIS_URL,REDIS_HOST,REDIS_PORT,BACKEND_URL,FRONTEND_URL,GMAIL_USER,GMAIL_APP_PASSWORD,MAILGUN_API_KEY,MAILGUN_DOMAIN,SMTP_HOST,SMTP_PORT,SENDGRID_API_KEY,EMAIL_PROVIDER,SENDGRID_FROM_EMAIL"
    ENV_MAP["apps/worker-file-processor"]="NODE_ENV,DATABASE_URL,REDIS_URL,REDIS_HOST,REDIS_PORT,IMAGEKIT_PRIVATE_KEY,IMAGEKIT_PUBLIC_KEY,IMAGEKIT_URL_ENDPOINT,UPLOADS_DIR"
}

declare -A ENV_MAP
init_env_map

###############################################################################
# Functions
###############################################################################

# Parse .env file into associative array
parse_env_file() {
    local file_path="$1"
    
    if [[ ! -f "$file_path" ]]; then
        echo -e "${RED}❌ Error: ${file_path} not found${NC}"
        exit 1
    fi
    
    # Read file line by line
    while IFS= read -r line || [[ -n "$line" ]]; do
        # Skip comments and empty lines
        if [[ "$line" =~ ^[[:space:]]*# ]] || [[ -z "${line// }" ]]; then
            continue
        fi
        
        # Extract key=value
        if [[ "$line" =~ ^([^=]+)=(.*)$ ]]; then
            local key="${BASH_REMATCH[1]}"
            local value="${BASH_REMATCH[2]}"
            # Remove leading/trailing whitespace
            key="${key#"${key%%[![:space:]]*}"}"
            key="${key%"${key##*[![:space:]]}"}"
            
            # Store in global associative array
            ENV_VARS["$key"]="$value"
        fi
    done < "$file_path"
}

# Generate .env file content for specific location
generate_env_content() {
    local required_keys="$1"
    local content=""
    
    IFS=',' read -ra KEYS <<< "$required_keys"
    for key in "${KEYS[@]}"; do
        if [[ -v "ENV_VARS[$key]" ]]; then
            content+="${key}=${ENV_VARS[$key]}"$'\n'
        else
            echo -e "${YELLOW}⚠️  Warning: ${key} not found in root ${ENV_FILE}${NC}"
            content+="${key}="$'\n'
        fi
    done
    
    echo "$content"
}

# Create .env from .env.example if it doesn't exist
ensure_root_env_exists() {
    if [[ ! -f "$ROOT_ENV_PATH" ]]; then
        if [[ ! -f "$EXAMPLE_ENV_PATH" ]]; then
            echo -e "${RED}❌ Error: Neither ${ENV_FILE} nor ${EXAMPLE_FILE} found${NC}"
            exit 1
        fi
        
        echo -e "${BLUE}📝 Root ${ENV_FILE} not found, creating from ${EXAMPLE_FILE}...${NC}"
        cp "$EXAMPLE_ENV_PATH" "$ROOT_ENV_PATH"
        echo -e "${GREEN}✅ Created ${ENV_FILE} from ${EXAMPLE_FILE}${NC}\n"
        echo -e "${YELLOW}⚠️  IMPORTANT: Edit ${ENV_FILE} with your actual values before deploying!${NC}\n"
    fi
}

###############################################################################
# Main sync function
###############################################################################

sync_env_files() {
    echo -e "${BLUE}🔄 Starting environment sync (${MODE} mode)...${NC}\n"
    
    # Ensure root .env exists
    ensure_root_env_exists
    
    # Parse root .env file into ENV_VARS associative array
    declare -gA ENV_VARS
    parse_env_file "$ROOT_ENV_PATH"
    
    local success_count=0
    local error_count=0
    
    # Iterate over environment map
    for target_path in "${!ENV_MAP[@]}"; do
        local required_keys="${ENV_MAP[$target_path]}"
        local full_path="${SCRIPT_DIR}/${target_path}"
        local env_file_path="${full_path}/.env"
        
        # Check if directory exists
        if [[ ! -d "$full_path" ]]; then
            echo -e "${YELLOW}⚠️  Directory ${target_path} does not exist, skipping...${NC}"
            continue
        fi
        
        # Generate and write .env file
        local content
        content=$(generate_env_content "$required_keys")
        
        if echo "$content" > "$env_file_path"; then
            local key_count
            key_count=$(echo "$required_keys" | tr ',' '\n' | wc -l)
            echo -e "${GREEN}✅ Synced ${target_path}/.env (${key_count} vars)${NC}"
            success_count=$((success_count + 1))
        else
            echo -e "${RED}❌ Error syncing ${target_path}/.env${NC}"
            error_count=$((error_count + 1))
        fi
    done
    
    echo -e "\n${BLUE}📊 Sync complete: ${success_count} succeeded, ${error_count} failed${NC}"
}

###############################################################################
# Run the sync
###############################################################################

sync_env_files
