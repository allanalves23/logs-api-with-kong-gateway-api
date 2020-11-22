FROM node:10.23.0-alpine3.10 as node

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
    
EXPOSE 3005

CMD ["npm", "start"]