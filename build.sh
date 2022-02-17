#!/bin/bash

jekyll build

cp _site/index.html /var/www/hyrax-UAlbany/public
cp _site/404.html /var/www/hyrax-UAlbany/public
cp _site/422.html /var/www/hyrax-UAlbany/public
cp _site/500.html /var/www/hyrax-UAlbany/public

cp _site/index.html /var/www/bento-UAlbany/public
cp _site/404.html /var/www/bento-UAlbany/public
cp _site/422.html /var/www/bento-UAlbany/public
cp _site/500.html /var/www/bento-UAlbany/public

cp _site/index.html /var/www/history/public
cp _site/404.html /var/www/history/public
cp _site/422.html /var/www/history/public
cp _site/500.html /var/www/history/public

cp _site/index.html /var/www/books/public
cp _site/404.html /var/www/books/public
cp _site/422.html /var/www/books/public
cp _site/500.html /var/www/books/public

cp _site/index.html /var/www/arclight-UAlbany/public
cp _site/404.html /var/www/arclight-UAlbany/public
cp _site/422.html /var/www/arclight-UAlbany/public
cp _site/500.html /var/www/arclight-UAlbany/public