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
    cp /var/www/spe_website/_site/404.html /var/www/hyrax-UAlbany/public/404.html
    cp /var/www/spe_website/_site/422.html /var/www/hyrax-UAlbany/public/422.html
    cp /var/www/spe_website/_site/500.html /var/www/hyrax-UAlbany/public/500.html
    cp /var/www/spe_website/_site/404.html /var/www/arclight-UAlbany/public/404.html
    cp /var/www/spe_website/_site/422.html /var/www/arclight-UAlbany/public/422.html
    cp /var/www/spe_website/_site/500.html /var/www/arclight-UAlbany/public/500.html
    cp /var/www/spe_website/_site/404.html /var/www/history-UAlbany/public/404.html
    cp /var/www/spe_website/_site/422.html /var/www/history-UAlbany/public/422.html
    cp /var/www/spe_website/_site/500.html /var/www/history-UAlbany/public/500.html
    cp /var/www/spe_website/_site/404.html /var/www/espy-UAlbany/public/404.html
    cp /var/www/spe_website/_site/422.html /var/www/espy-UAlbany/public/422.html
    cp /var/www/spe_website/_site/500.html /var/www/espy-UAlbany/public/500.html
    cp /var/www/spe_website/_site/404.html /var/www/books-UAlbany/public/404.html
    cp /var/www/spe_website/_site/422.html /var/www/books-UAlbany/public/422.html
    cp /var/www/spe_website/_site/500.html /var/www/books-UAlbany/public/500.html
    cp /var/www/spe_website/_site/404.html /var/www/bento-UAlbany/public/404.html
    cp /var/www/spe_website/_site/422.html /var/www/bento-UAlbany/public/422.html
    cp /var/www/spe_website/_site/500.html /var/www/bento-UAlbany/public/500.html
    echo "$(date) $line Done"
else
    echo "$(date) $line No updates"
fi