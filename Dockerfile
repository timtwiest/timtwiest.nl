FROM nginx:alpine

# Copying individual files
COPY index.html /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/
COPY robots.txt /usr/share/nginx/html/
COPY CNAME /usr/share/nginx/html/

# Copying the entire public directory
COPY public /usr/share/nginx/html/public

ENV PORT=80