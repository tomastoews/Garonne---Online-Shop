FROM nginx:alpine

RUN mkdir usr/share/nginx/html/garonne
COPY /dist/ usr/share/nginx/html/garonne

EXPOSE 80