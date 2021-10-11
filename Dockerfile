FROM node:lts-alpine

COPY lib/ /app/lib/
COPY app.js /app
COPY package-lock.json /app
COPY package.json /app

WORKDIR /app

RUN npm i

EXPOSE 3000

CMD ["node", "app.js"]
