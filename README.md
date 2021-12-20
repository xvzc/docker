# docker

## How docker works
1. Pull base image
2. Create a intermidiate container
3. Add commands and a new file snapshot to the intermediate container
4. Create an image with the container
5. Remove the intermediate continer

## Basic commands

### docker create/start
`$ docker create <image>` creates a container with the image name specified.  
`$ docker start <container_id>` starts the container.  
`$ docker start -a <container_id>` starts the container and shows the output.  

### docker run/exec
`$ docker run <image>` = `docker run` + `docker start`  
`$ docker exec <container_name> <command>` executes a command in a running container.  
`$ docker exec -it <container_name> <shell>` attaches to the container's shell(bash | sh | zsh).  
> -i = interactive
> -t = terminal

### docker images/ps
`$ docker images` shows all images.  
`$ docker ps` shows running containers.  
`$ docker ps -a` shows running, stopped containers.  
`$ docker ps -aq` shows running, stopped containers without column names. 

### docker stop/kill
`$ docker stop <container_id>` stops the container(gracefully).  
`$ docker kill <container_id>` stops the container(immediately).  

### docker rm/rmi
`$ docker rm $(docker ps -aq)` removes all containers.  
`$ docker rmi <image>` removes an image.  
`$ docker system prune` removes all images, containers except containers which is currently running.  

## Writing a Dockerfile

```docker
FROM BaseImage

RUN commands

CMD ["exacutable commands"]
```

## Creating a docker image with Dockerfile in current directory
`$ docker build ./`  
`$ docker build ./ -t name:tag` Creates an image with a specific name and a tag.

## Creating a container with a docker image
`$ docker create <image_name>`  

## Running an image
`$ docker run <image_name>`  
`$ docker run -p host_port:container_port <image_name>` Creates a container with port forwarding enabled.
