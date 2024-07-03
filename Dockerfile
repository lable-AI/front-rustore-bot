FROM node:20.14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
