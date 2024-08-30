# Website for M.E. Grenander Department of Special Collections & Archives

This is a Jekyll 4 wrapper website available at [https://archives.albany.edu/](https://archives.albany.edu/).

## Development

The Jekyll site is now dockerized, so for development you can just run it with:

```
docker-compose up
```

## Production

A cronjob in the crontab automatically updates the live website every 5 minutes with any changes committed to this Github repo using `update.sh`. This script also copies the main `index.html` page built by jekyll into the Hyrax public directory so it will also be available at [https://archives.albany.edu/](https://archives.albany.edu/) in addition to [https://archives.albany.edu/web/](https://archives.albany.edu/web/).

This script also updates all the 400, 422, and 500 pages for the rails apps

```
*/5 * * * * cd /var/www/spe_website && ./update.sh >> /media/Library/ESPYderivatives/spe_website.log 2>&1
```


