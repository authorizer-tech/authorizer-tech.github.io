---
title: "Introduction"
sidebar_position: 0 
---
:::note **This documentation is under active development!**

Please forgive the missing content in various locations. This project is under active development and is evolving rapidly. Keep an eye out for updates :eyes:!
:::

The Authorizer platform is a distributed, highly-scalable, and high performance platform for permission and access management. It stores permissions and serves authorization queries based on stored permissions. It supports a variety of models including: attribute-based access control (ABAC), role-based access control (RBAC), access control lists (ACLs), and other custom models. The design of the Authorizer platform is inspired by the design of [Google Zanzibar - "Google’s Consistent, Global Authorization System"](https://research.google/pubs/pub48190/).

> Zanzibar is a global system for storing and evaluating access control lists. Zanzibar provides a uniform data model and configuration language for expressing a wide range of access control policies from hundreds of client services at Google, including Calendar, Cloud, Drive, Maps, Photos, and YouTube. Its authorization decisions respect causal ordering of user actions and thus provide external consistency amid changes to access control lists and object contents.

---

To get started integrating your application with the Authorizer platform, checkout these useful resources:

* [Getting Started](../getting-started/getting-started-intro)
* [Examples](./examples/examples-intro)
* [API Reference](../api-reference)

If you'd like to learn more about the design and concepts of the Authorizer platform check out these resources:

* [Architecture](./architecture)
* [Concepts](./concepts/concepts-intro)
