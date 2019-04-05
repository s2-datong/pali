FROM node:10

WORKDIR /www

COPY package*.json ./
RUN npm install

COPY modules ./modules
COPY test ./test
COPY index.js ./

RUN npm run test

EXPOSE 3000

CMD [ "npm", "start" ]