FROM node:10

RUN mkdir /app
WORKDIR /app
COPY ./dist /app
EXPOSE 8080

CMD ["node", "/app/server"]

