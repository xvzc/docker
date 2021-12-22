# docker

## How docker works
1. Pull base image
2. Create a intermidiate container
3. Add commands and a new file snapshot to the intermediate container
4. Create an image with the container
5. Remove the intermediate continer

## Basic commands

### docker images/build
`$ docker images` shows all images.  
`$ docker build ./` creates an image from the Dockerfile in current directory
`$ docker build ./ -t name:tag` creates an image with a specific name and a tag.

### docker create/start
`$ docker create <image>` creates a container with the image name specified.  
`$ docker start <container_id>` starts the container.  
`$ docker start -a <container_id>` starts the container and shows the output.  

### docker run/exec
`$ docker run <image>` = `docker run` + `docker start`  
`$ docker run -it <image>`  runs a images as a container and show the output.
`$ docker run -d <image>`  runs a container in background
> -d = detach
`docker build -f Dockerfile.dev -t react:test ./`
> We use -f option when we need to use arbitarily defined name of Dockerfile


`$ docker run -p 5000:8080 -v /home/node/app/node_modules -v $(pwd):/home/node/app node:test` 
> the command above mounts current directory to the working directory inside the container.

`$ docker run -p host_port:container_port <image>` creates a container with port forwarding enabled.
`$ docker exec <container_name> <command>` executes a command in a running container.  
`$ docker exec -it <container_name> <shell>` attaches to the container's shell(bash | sh | zsh).  

> -i = interactive  
> -t = terminal

### docker stop/kill
`$ docker stop <container_id>` stops the container(gracefully).  
`$ docker kill <container_id>` stops the container(immediately).  


### docker ps
`$ docker ps` shows running containers.  
`$ docker ps -a` shows running, stopped containers.  
`$ docker ps -aq` shows running, stopped containers without column names. 

### docker rm/rmi
`$ docker rm $(docker ps -aq)` removes all containers.  
`$ docker rmi <image>` removes an image.  
`$ docker system prune` removes all images, containers except containers which is currently running.  

## Writing a Dockerfile

### dev
```docker
FROM BaseImage

# WORKDIR, RUN, COPY ...

CMD ["exacutable commands"]
```

### prod
```docker
# builder stage
FROM BaseImage as builder

# WORKDIR, RUN, COPY ...

CMD ["build command"]

# run stage
FROM nginx
COPY --fron==builder /usr/src/app/build /usr/share/nginx/html
```

# docker-compose

## Basic commands

### docker-compose up
`$ docker-compose up` runs containers written inside the docker-compose.yml.
`$ docker-compose up -d ` runs in background
`$ docker-compose up --build` with new images built

### docker-compose down
`$ docker-compose down` stops all containers that are written in docker-compose.yml.

