#!/bin/bash

if [[ $TRAVIS_BRANCH == 'develop' ]]; then
  ng build --prod --env=stg --aot=false --sourcemap=true
fi

if [[ $TRAVIS_BRANCH == 'master' ]]; then
  ng build --prod --env=prod --aot=false --sourcemap=true
fi

replace_vars () {
        sed -i "s#@@VERSION@@#$TRAVIS_COMMIT#g" "$1"
}

find dist -type f \( -name "*.html" -or -name "*.js" -or -name "*.map" \) | while read -r file; do replace_vars "$file"; done
