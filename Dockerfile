FROM node:20-alpine as build
WORKDIR /app
COPY . .
CMD [ "./entrypoint.sh" ]
