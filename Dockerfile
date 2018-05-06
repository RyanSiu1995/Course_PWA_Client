FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
CMD ["ls"]
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "build-pwa"]