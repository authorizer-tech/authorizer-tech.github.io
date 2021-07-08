---
title: "API Overview"
sidebar_position: 0
---

:::note
The Authorizer platform supports a standard HTTP/JSON API or [grpc](https://grpc.io) APIs backed by [protocol-buffers](https://developers.google.com/protocol-buffers).

Support for the HTTP/JSON API comes from the [grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway) package which
is a gRPC to JSON proxy generator that follows the standard [gRPC and HTTP transcoding spec](https://google.aip.dev/127).
:::


## gRPC API References

- [NamespaceConfigService](./nsconfig-service)
- [WriteService](./write-service)
- [ReadService](./read-service)
- [CheckService](./check-service)
- [ExpandService](./expand-service)
- [WatchService](./watch-service)