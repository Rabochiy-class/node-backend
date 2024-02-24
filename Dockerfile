FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
# Для использования в продакшне
# RUN npm install --production

COPY . .

EXPOSE 5000

ENTRYPOINT [ "node", "index.js" ]