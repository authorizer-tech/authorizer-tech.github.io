---
sidebar_position: 0 
---

# Introduction

The authorizer platform is a distributed, highly-scalable, and high performance platform for permission management . It stores permissions and serves authorization queries based on stored permissions. It supports models including: attribute-based access control (ABAC), role-based access control (RBAC), and/or access control lists (ACLs). The design of the authorizer platform is inspired by the design of [Google Zanzibar - "Google’s Consistent, Global Authorization System"](https://research.google/pubs/pub48190/).

> Zanzibar is a global system for storing and evaluating access control lists. Zanzibar provides a uniform data model and configuration language for expressing a wide range of access control policies from hundreds of client services at Google, including Calendar, Cloud, Drive, Maps, Photos, and YouTube. Its authorization decisions respect causal ordering of user actions and thus provide external consistency amid changes to access control lists and object contents.

:::note
The authorizer platform supports a standard HTTP/JSON API or [grpc](https://grpc.io) APIs backed by [protocol-buffers](https://developers.google.com/protocol-buffers).
:::

---

To get started integrating your application with the authorizer platform, checkout these useful resources:

* [Getting Started](../getting-started/getting-started-intro)
* [Examples](./examples/examples-intro)
* [API Reference](../api-reference/overview)

If you'd like to learn more about the design and concepts of the authorizer platform check out these resources:

* [Architecture](./architecture)
* [Concepts](./concepts/concepts-intro)
