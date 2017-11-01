#!/bin/bash
echo "Downloading latest package"

if [[ $ENV == 'live' ]]; then
  curl https://s3.eu-central-1.amazonaws.com/app-live-briefy/packages/_latest/briefyhq-rolleiflex.tar.gz -o /var/www.tar.gz
fi
if [[ $ENV == 'staging' ]]; then
  curl https://s3.amazonaws.com/app-stg-briefy/packages/_latest/briefyhq-rolleiflex.tar.gz -o /var/www.tar.gz
fi

mkdir -p /var/www/
cd /var/www/ || echo "Errors"
echo "Uncompressing it"
tar xzf ../www.tar.gz

if [ -e "index.html" ]; then
  echo "Starting Nginx"
  nginx
else
  echo "Problem with the build of the site"
fi
