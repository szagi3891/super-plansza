FROM node:10

RUN mkdir /app
WORKDIR /app
COPY ./src /app/src
COPY ./package.json /app
COPY ./yarn.lock /app
COPY ./tsconfig.json /app
COPY ./webpack /app/webpack

RUN yarn
RUN yarn run build-dev
COPY ./webpack /app/webpack
EXPOSE 8080

CMD ["yarn", "run", "server"]

