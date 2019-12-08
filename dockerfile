#FROM node:10-alpine
#WORKDIR /usr/src/app
#COPY package.json ./
#RUN npm install
#COPY . .
#EXPOSE 8004
#CMD [ "npm","start","0.0.0.0:8004"]
#CMD npm start --host 0.0.0.0:8004

FROM node:10 as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN ng build --prod


FROM nginx:1.14.1-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder  /usr/src/app/dist/Admin-Run-lite /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]