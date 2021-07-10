---
sidebar_position: 1
---

# Kubernetes + Helm (Recommended)
Our official [Helm chart](https://github.com/authorizer-tech/helm-charts/tree/master/charts/authorizer) can be used to setup and install the Authorizer platform in a [Kubernetes](https://kubernetes.io) cluster. For more information, please refer to the official Helm chart's documentation.

To install an instance of the Authorizer platform using the Helm chart, create a `values.yaml` file with your release specific [Helm values](https://github.com/authorizer-tech/helm-charts/tree/master/charts/authorizer#parameters) and then run the following commands:

```console
helm repo add authorizer-tech https://charts.authorizer.tech
helm install authorizer -f values.yaml authorizer-tech/authorizer
```