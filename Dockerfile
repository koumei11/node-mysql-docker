FROM node:16.0.0

WORKDIR /usr/src/node-sample-project

COPY ./ ./

RUN npm install

CMD [ "/bin/bash" ]
