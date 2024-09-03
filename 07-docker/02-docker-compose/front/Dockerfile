# FROM alpine

# ARG FOLDER

# RUN mkdir ${FOLDER}

# CMD ["/bin/sh"] 

# -------------------------------------------------------------------------------------------------

FROM nginx

RUN apt-get update \
    && apt-get install -y nano
    
WORKDIR /usr/share/nginx/html