FROM node:14-alpine AS build
LABEL maintainer="miketung2013@gmail.com"

RUN mkdir /app
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm ci
COPY . /app
RUN npm run build

FROM nginx:1.20-alpine
LABEL maintainer="miketung2013@gmail.com"
COPY --from=build /app/dist/mhs2/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d
