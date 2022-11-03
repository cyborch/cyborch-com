#!/usr/bin/env bash

set -e

cd "$(dirname "$0")/.."

docker build -t cyborch/cyborch-com:latest .
# docker-squash cyborch/cyborch-com -t cyborch/cyborch-com:latest
docker push cyborch/cyborch-com:latest
helm upgrade -i cyborch-com ./helm
echo ""
echo 👑 successfully deployed!
