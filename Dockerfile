FROM nginx:alpine-slim
LABEL authors="gomi"

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf