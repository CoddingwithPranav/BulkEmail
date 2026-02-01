#!/bin/bash
# Quick Docker Build Script for All Services

set -e

echo "🐳 Building Docker images for all services..."
echo ""

# Function to build with progress
build_service() {
    local service=$1
    local dockerfile=$2
    echo "📦 Building $service..."
    docker build -f $dockerfile -t messanger-$service .
    echo "✅ $service built successfully"
    echo ""
}

# Build all services
build_service "api" "apps/api/Dockerfile"
build_service "web" "apps/web/Dockerfile"
build_service "worker-file" "apps/worker-file-processor/Dockerfile"
build_service "worker-email" "apps/worker-send-email/Dockerfile"

echo "🎉 All services built successfully!"
echo ""
echo "To start services:"
echo "  docker-compose up -d"
echo ""
echo "To view logs:"
echo "  docker-compose logs -f"
