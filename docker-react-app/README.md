# node

## dev
### Create Dockerfile.dev
```docker
FROM node:alpine

WORKDIR /usr/src/app

# this solves an issue on linux environment
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache


COPY package.json ./

RUN npm install 
COPY ./ ./

CMD ["npm", "run", "start"]
```

### Build the image
`docker build ./ -t node:test`

### Run
`$ docker run -p 8081:8080 node:test`

### Test
`curl localhost:8081`

### With docker-compose
```
version: "3"
services:
  react:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - ./:/usr/src/app
      - /usr/src/app/node_modules
    stdin_open: true
  tests:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - /usr/src/app/node_modules
      - ./:/usr/src/app
    command: ["npm", "run", "test"]
```
> stdin_open property fixes a bug that happens when stopping the react app  
> test code will be automatically applied and run either because we mounted the host directory to the container.

## prod
### Create Dockerfile.prod
```dockerfile
FROM node:alpine as builder

WORKDIR '/usr/src/app'
COPY package.json .
RUN npm install
COPY ./ ./

RUN npm run build

FROM nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
```

### Build the image
`$ docker build ./ -t react:prod -f Dockerfile.prod`
### Run
`$ docker run -p 8080:80 react:prod`
