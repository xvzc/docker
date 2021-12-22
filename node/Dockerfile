FROM node:10

WORKDIR /home/node/app

# copy package.json, npm install first 
# so that docker can use cache instead of running npm install everytime.
COPY package.json ./ 
RUN npm install

COPY ./ ./

CMD ["npm", "start"]
