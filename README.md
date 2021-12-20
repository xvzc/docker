# docker

## How docker works
Dockerfile -> image -> containers(replicable)

## Creating a docker image with Dockerfile in current directory
`$ docker build ./`

## Creating a container with a docker image
`$ docker create <image_name>`

## Writing a Dockerfile

```docker
FROM BaseImage

RUN commands

CMD ["exacutable commands"]
```

