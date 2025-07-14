# Website for M.E. Grenander Department of Special Collections & Archives

This is a Jekyll 4 wrapper website available at [https://archives.albany.edu/](https://archives.albany.edu/).

## Development

The Jekyll site is now dockerized, so for development you can just run it with:

```
docker-compose up
```

## Production

Build the image

```
docker build -t spe_website .
```

A cronjob in the crontab automatically updates the live website every 5 minutes with any changes committed to this Github repo using `update.sh`.

```
*/5 * * * * ./update.sh >> /media/Library/SPE_Automated/spe_website.log 2>&1
```

This may need permissions for `_site`
```
chown "$(id -u):$(id -g)" _site
```
