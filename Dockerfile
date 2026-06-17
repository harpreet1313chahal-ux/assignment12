FROM node:18-alpine

WORKDIR /chahal_harpreet_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8083

CMD ["serve", "-s", "build", "-l", "8083"]