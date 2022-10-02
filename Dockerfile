FROM node:lts-alpine

WORKDIR /todo-list/

COPY package.json package-lock.json /todo-list/

RUN npm ci --silent

COPY . .

RUN npx prisma generate

USER node

CMD npm start:dev