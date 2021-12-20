# docker

## How docker works
1. Pull base image
2. Create a intermidiate container
3. Add commands and a new file snapshot to the intermediate container
4. Create an image with the container
5. Remove the intermediate continer

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

