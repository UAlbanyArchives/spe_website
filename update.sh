#!/usr/bin/env bash
set -euo pipefail

cd /var/www/spe_website  # Make sure to use your repo path

echo "$(date) Checking for updates..."

# Update remote refs quietly
git remote update

# Get current branch name (handle detached HEAD safely)
branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$branch" == "HEAD" ]]; then
  echo "$(date) Detached HEAD state detected. Skipping update check."
  exit 0
fi

# Get local and remote commit hashes
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})

if [[ "$LOCAL" != "$REMOTE" ]]; then
  echo "$(date) Updates found on branch '$branch'"

  git pull --ff-only

  echo "$(date) Building site with spe_website image..."
  docker run --rm \
    -v "$PWD:/code" \
    -v jekyll_cache:/code/.jekyll-cache \
    -w /code \
    spe_website \
    jekyll build --config _config.yml
  echo "$(date) Build complete"
else
  echo "$(date) No updates found on branch '$branch'."
fi
