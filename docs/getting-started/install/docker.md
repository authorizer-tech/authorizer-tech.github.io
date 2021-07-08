---
sidebar_position: 2
---

# Docker
Pre-built Docker images are published to our official Docker registry [gcr.io/authorizer-tech](https://gcr.io/authorizer-tech). Our official [authorizer-examples](https://github.com/authorizer-tech/authorizer-examples) repository has a [`docker-compose.yaml`][1] file that can be used to bootstrap an instance of the Authorizer platform using Docker Compose. For example:

```console
git clone https://github.com/authorizer-tech/authorizer-examples
cd authorizer-examples
docker compose -f docker/docker-compose.yaml up
```

For more information on the configurations and environment variables take a look at the [Configuration](../../configuration) page.

[1]: https://github.com/authorizer-tech/authorizer-examples/blob/master/docker/docker-compose.yaml