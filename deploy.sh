#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm run generate

# navigate into the build output directory
cd .output/public

# if you are deploying to a custom domain
echo 'jakecarnevale.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:jcarnevale89/jcarnevale89.github.io.git gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -