#!/usr/bin/env bash

set -e

cd "$(dirname "$0")/../.."

docker build -t cyborch/cyborch-com:latest .
docker push cyborch/cyborch-com:latest
helm uninstall cyborch-com || true
helm install cyborch-com ./helm
echo ""
echo 👑 successfully deployed!
