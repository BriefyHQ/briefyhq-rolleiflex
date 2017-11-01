FROM briefy/nginx:1.10.1

MAINTAINER Briefy <developers@briefy.co>

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/startup.sh /var/startup.sh


CMD ["/var/startup.sh"]
