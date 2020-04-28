FROM node:10 as devel

WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM alpine as prod

RUN addgroup -g 1000 -S www && \
    adduser -u 1000 -S www -G www

RUN apk add lighttpd

RUN mkdir -p /var/www/localhost/htdocs && \
    mkdir -p /etc/lighttpd
COPY --from=devel /app/dist/ /var/www/localhost/htdocs/
COPY ./config/lighttpd.conf /etc/lighttpd/
EXPOSE 80

CMD ["/usr/sbin/lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]
