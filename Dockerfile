FROM nginx

ENV NGINX_HOST=bg.theone.io
ENV NGINX_PORT=80
EXPOSE 80

ADD ./dist /usr/share/nginx/html
ADD ./site/template.conf /etc/nginx/conf.d/default.conf


CMD nginx -g 'daemon off;'
