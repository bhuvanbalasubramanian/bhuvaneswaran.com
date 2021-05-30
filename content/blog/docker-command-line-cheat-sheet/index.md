---
title: Docker – Command Line Cheat Sheet
date: "2021-02-01T00:00:03.284Z"
description: "Usefull docker commands"
---

To get Docker version and info

```bash
$ docker --version
```

To get Docker details

```bash
$ docker version
```

Build Docker image with tag

```bash
docker build -t <image-name> .
```

Push Docker image

```bash
docker push <image-name>
```

Execute Docker image

```bash
docker run <image-name>
docker run --rm -p 3005:3005 <image-name>
docker run -d -p 5672:5672 -p 15672:15672 <image-name>
```

List Docker images

```bash
docker image ls
```

List Docker containers (running, all, all in quiet mode)

```bash
docker container ls
docker container ls --all
docker container ls -aq
```

List Docker Networks

```bash
docker network ls
docker network inspect bridge
```

Stop and remove all Docker containers

```bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```
