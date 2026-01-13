#!/bin/bash

# Setup Nginx and SSL certificate for bulkemail.pranavmishra.dev
# This script configures nginx as a reverse proxy and obtains SSL certificate using certbot

set -e

DOMAIN="bulkemail.pranavmishra.dev"
API_PORT=3000
WEB_PORT=3001
EMAIL="pranavmishra2101@gmail.com"  # Change if needed

echo "🔧 Setting up Nginx and SSL for $DOMAIN"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "❌ Please run as root (use sudo)"
    exit 1
fi

# Install nginx if not installed
if ! command -v nginx &> /dev/null; then
    echo "📦 Installing Nginx..."
    apt-get update
    apt-get install -y nginx
else
    echo "✅ Nginx already installed"
fi

# Install certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing Certbot..."
    apt-get update
    apt-get install -y certbot python3-certbot-nginx
else
    echo "✅ Certbot already installed"
fi

# Create nginx configuration
echo "📝 Creating Nginx configuration..."

cat > /etc/nginx/sites-available/$DOMAIN << 'EOF'
# HTTP server - redirects to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name bulkemail.pranavmishra.dev;

    # Allow certbot to verify domain
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    # Redirect all other HTTP requests to HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}

# HTTPS server - main configuration
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name bulkemail.pranavmishra.dev;

    # SSL certificates (will be configured by certbot)
    # ssl_certificate /etc/letsencrypt/live/bulkemail.pranavmishra.dev/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/bulkemail.pranavmishra.dev/privkey.pem;

    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Client body size limit (for file uploads)
    client_max_body_size 50M;

    # Logging
    access_log /var/log/nginx/bulkemail.pranavmishra.dev.access.log;
    error_log /var/log/nginx/bulkemail.pranavmishra.dev.error.log;

    # Root location - proxy to Next.js web app
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # API routes - proxy to Express API
    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts for API
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files and uploads
    location /uploads/ {
        alias /home/$USER/MessangerNepal/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Next.js static files
    location /_next/static/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_cache_valid 200 60m;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
EOF

# Enable the site
echo "🔗 Enabling site..."
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/

# Remove default site if it exists
if [ -f /etc/nginx/sites-enabled/default ]; then
    echo "🗑️  Removing default site..."
    rm /etc/nginx/sites-enabled/default
fi

# Test nginx configuration
echo "🧪 Testing Nginx configuration..."
nginx -t

# Reload nginx
echo "🔄 Reloading Nginx..."
systemctl reload nginx

# Enable nginx to start on boot
systemctl enable nginx

echo ""
echo "✅ Nginx configuration created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Make sure your DNS A record points to this server's IP"
echo "2. Run the following command to obtain SSL certificate:"
echo ""
echo "   sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos -m $EMAIL"
echo ""
echo "   Or run it interactively:"
echo "   sudo certbot --nginx -d $DOMAIN"
echo ""
echo "3. Certbot will automatically configure SSL in the nginx config"
echo "4. Set up auto-renewal (certbot usually does this automatically):"
echo "   sudo certbot renew --dry-run"
echo ""
echo "📝 Configuration file: /etc/nginx/sites-available/$DOMAIN"
echo "📊 Access logs: /var/log/nginx/$DOMAIN.access.log"
echo "🚨 Error logs: /var/log/nginx/$DOMAIN.error.log"
echo ""
echo "🌐 Your site will be available at: https://$DOMAIN"
