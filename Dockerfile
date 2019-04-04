FROM node:10

WORKDIR /www

COPY package*.json ./
RUN npm install

COPY modules ./
COPY tests ./
COPY index.js ./

RUN npm test

EXPOSE 3000
CMD [ "npm", "start" ]