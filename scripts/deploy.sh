#!/usr/bin/env bash

set -e

cd "$(dirname "$0")/.."

docker build -t cyborch/cyborch-com:latest .
docker-squash cyborch/cyborch-com -t cyborch/cyborch-com:latest
docker push cyborch/cyborch-com:latest
helm install cyborch-com ./helm || helm upgrade cyborch-com ./helm
echo ""
echo 👑 successfully deployed!
