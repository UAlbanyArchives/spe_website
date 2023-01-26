#!/usr/bin/bash

echo "$(date) $line checking for updates..."
output=$( git fetch --dry-run 2>&1 )

if [[ $output ]]
then
    echo "$(date) $line Updates found"
    source ~/.rvm/scripts/rvm
    rvm 2.6.5@website
    git pull
    jekyll build
    echo "$(date) $line Copying index.html to Hyrax"
    cp /var/www/spe_website/_site/index.html /var/www/hyrax-UAlbany/public
    echo "$(date) $line Done"
else
    echo "$(date) $line No updates"
fi