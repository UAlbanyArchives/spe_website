# Website for M.E. Grenander Department of Special Collections & Archives

This is a Jekyll 4 wrapper website available at [https://archives.albany.edu/](https://archives.albany.edu/).

## Development

The Jekyll site is now dockerized, so for development you can just run it with:

```
docker compose up --build
```

## Production

Build the image

```
docker build -t spe_website .
```

The update script rebuilds this image when it detects a new commit, then builds the site with the versions locked in `Gemfile.lock`.

A cronjob can automatically update the live website every 5 minutes with changes committed to this GitHub repo using `update.sh`.

```
*/5 * * * * /var/www/spe_website/update.sh >> /media/Library/SPE_Automated/spe_website.log 2>&1
```

This may need permissions for `_site` and `.jekyll-cache`
```
sudo chown -R [host username] .jekyll-cache _site
```
