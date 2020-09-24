FROM node:10.16.0-alpine

USER root

ENV ROOT_APP_DIR=/applications
WORKDIR $ROOT_APP_DIR

RUN apk add --update \
     python \
     python-dev \
     py-pip \
     build-base \
     yarn \
   && pip install virtualenv \
   && rm -rf /var/cache/apk/*

COPY ./src ./src
COPY ./share ./share
COPY ./next.config.js ./next.config.js
COPY ./package.json ./package.json

RUN yarn

RUN yarn build


