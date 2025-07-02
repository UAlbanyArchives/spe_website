#!/usr/bin/bash
set -euo pipefail

echo "$(date) Checking for updates..."
output=$(git fetch --dry-run 2>&1)

if [[ $output ]]; then
    echo "$(date) Updates found"
    git pull
    docker run --rm -v "$PWD:/site" -w /site spe_website jekyll/jekyll:4 jekyll build
    echo "$(date) Build complete."
else
    echo "$(date) No updates"
fi
