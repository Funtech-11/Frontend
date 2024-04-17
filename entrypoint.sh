#!/bin/sh

npm install
npm run build
mkdir /app/frontend_static/
cp -r /app/dist/. /app/frontend_static/.
