#!/usr/bin/env bash
set -euo pipefail

echo "$(date) Checking for updates..."
output=$(git fetch --dry-run 2>&1)

if [[ -n "$output" ]]; then
    echo "$(date) Updates found"
    git pull

    echo "$(date) Building site with spe_website image..."

    docker run --rm \
      -v "$PWD:/code" \
      -w /code \
      spe_website \
      jekyll build --config _config.yml --no-cache

    echo "$(date) Build complete"
else
    echo "$(date) No updates found."
fi
