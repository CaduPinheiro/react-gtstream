FROM node:14

RUN mkdir appserver
WORKDIR /appserver

RUN mkdir front

COPY ./build/ /appserver/front

RUN npm install serve -g

EXPOSE 3000


ENTRYPOINT ["bash", "-c", "cd front && serve"]