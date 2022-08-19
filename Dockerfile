FROM node:18 as build-stage 

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY ./ /app/

RUN npm run build 

FROM nginx:alpine 

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /app/public/ .

ENTRYPOINT ["nginx", "-g", "daemon off;"]