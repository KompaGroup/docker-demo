FROM node:10

WORKDIR /app

COPY package.json .

RUN npm i

EXPOSE 8080

COPY . .

RUN npm run build

CMD ["npm", "start"]