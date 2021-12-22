# node

## Create a Dockerfile
```docker
FROM node:10

WORKDIR /home/node/app

# copy package.json, npm install first 
# so that docker can use cache instead of running npm install everytime.
COPY package.json ./ 
RUN npm install

COPY ./ ./

CMD ["npm", "start"]
```


## Build an image
`docker build ./ -t node:test`

## Run
`$ docker run -p 8081:8080 node:test`

## Test
`curl localhost:8081`
