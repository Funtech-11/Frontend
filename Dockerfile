FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN chmod +x entrypoint.sh
CMD [ "./entrypoint.sh" ]
