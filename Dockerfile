FROM node:21-alpine as build
LABEL authors="Andrew"
WORKDIR /opt/app
ADD *.json ./

RUN npm ci --silent
ADD . .
RUN npx prisma generate && \
    npm run build

FROM node:21-alpine

WORKDIR /opt/app

ADD *.json ./

RUN npm ci --production --silent

COPY --from=build /opt/app/dist ./dist
COPY --from=build /opt/app/prisma ./prisma

RUN npx prisma generate

CMD ["npm", "start"]