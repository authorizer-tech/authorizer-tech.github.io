---
sidebar_position: 0
---

# Overview

The Authorizer platform is composed of three primary applications: the [access-controller][1], [access-watcher][2], and the [access-indexer][3]. See the [Architecture](../../overview/architecture) section for more details.

Each one of these apps has pre-built binaries and pre-built Docker images that you can use. However, it is recommended to install the Authorizer platform into a [Kubernetes](https://kubernetes.io/) cluster using our official [Helm chart][4]. The Helm chart bootstraps the dependencies for the Authorizer platform, so it's the easiest way to get started.

:::note
If you already have Docker, Kubernetes comes pre-bundled with more recent versions of Docker Desktop.
:::

For more information on how to setup the Authorizer platform using any one of these options, please take a look at the following guides:

- ☸️ [Kubernetes + Helm (Recommended)](./kubernetes)
- 🐳 [Docker](./docker)
- 🔨 [Pre-built Binaries](./binary)

[1]: https://github.com/authorizer-tech/access-controller
[2]: https://github.com/authorizer-tech/access-watcher
[3]: https://github.com/authorizer-tech/access-indexer
[4]: https://github.com/authorizer-tech/helm-charts/tree/master/charts/authorizer