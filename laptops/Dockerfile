FROM node:11

WORKDIR /src/app

COPY . .

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]