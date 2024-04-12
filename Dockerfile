FROM node:20-alpine as build
WORKDIR /app
COPY . .
ENTRYPOINT [ "/app/entrypoint.sh" ]
