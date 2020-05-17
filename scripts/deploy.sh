#!/usr/bin/env bash

set -e

cd "$(dirname "$0")/.."

docker build -t docker-registry.cyborch.com/cyborch-com:latest .
docker-squash docker-registry.cyborch.com/cyborch-com -t docker-registry.cyborch.com/cyborch-com:latest
docker push docker-registry.cyborch.com/cyborch-com:latest
helm uninstall cyborch-com || true
helm install cyborch-com ./helm
echo ""
echo 👑 successfully deployed!
