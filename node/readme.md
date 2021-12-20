# node

## Create a Dockerfile
```docker
FROM node:10

COPY package.json ./
COPY server.js ./

RUN npm install

CMD ["npm", "start"]
```

## Run
`docker build ./ -t node:test`
