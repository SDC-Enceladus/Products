FROM node:20.10.0

WORKDIR /usr/src/Products

COPY package*.json ./

COPY ./server/schema.sql ./server/

RUN npm install

COPY . .

EXPOSE 3210

CMD ["node", "server/app.js"]