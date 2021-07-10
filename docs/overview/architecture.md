---
sidebar_position: 1
---

# Architecture

The Authorizer platform is composed of three primary systems:

* [__access-controller__](https://github.com/authorizer-tech/access-controller) - An access-controller serves RPCs for Check, Expand, Read, Write, and RPCs to administer namespace configs.

* [__access-watcher__](https://github.com/authorizer-tech/access-watcher) - An access-watcher serves Watch RPCs and streams changes from a changelog in near real-time to clients interested in changes to one or more namespaces.

* [__access-indexer__](https://github.com/authorizer-tech/access-indexer) - An indexing system used to optimize operations on large and deeply nested sets. It reads periodic snapshots of ACL data and watches for changes between snapshots. It performs transformations on that data, such as denormalization, and responds to requests from access-controllers.


<p align="center">
    <img src="/img/architecture.png"/>
</p>


## Namespace Configuration Storage
[Namespace Configurations](./concepts/namespaces) are persisted across two database tables. One table contains the configs and is indexed by namespace. The other is a namespace config changelog that stores config updates and is indexed by commit timestamp. This structure allows the access-controller servers to initially load configs on startup and also continuously monitor namespace config changes at runtime.

Changes to namespace configs can affect the outcome of authorization evaluations, and therefore their correctness. Thefore, each access-controller chooses a single snapshot timestamp for namespace config metadata when evaluating a client request. All access-controllers in a cluster use the same timestamp for the same request, including any subrequests that fan out from the original client request.

Each access-controller independently loads namespace configs from storage continuously as they change. An access-controller in a cluster may have access to a different range of namespace config timestamps due to restarts or network latency, and thus an access-controller must pick a timestamp that is available across the quorum of members in the cluster. To facilitate this, each access-controller implements a background monitoring job that tracks the timestamp range available to every cluster member and aggregates them. On each incoming request an access-controller picks a time from this range, ensuring that all requests can continue to be served even if they are no longer able to read from the config storage.

## Relation Tuple Storage
[Relation tuples](./concepts/relation-tuples) are persisted across separate namespace tables. A relation tuple is identified by a primary key of the form `(object, relation, subject, timestamp)`. Multiple tuple versions are stored on different rows, thus allowing authorization checks to be evaluated within a certain time window.

## Changelog
The Authorizer platform maintains a changelog that stores a history of changes to [relation tuples](./concepts/relation-tuples). For every mutation that is commited to relation tuple storage, an additional mutation is applied within the same transaction to the changelog. The changelog allows the access-watcher to serve Watch requests. The [WatchService API](../api-reference#watchservice) allows clients to continuously monitor changes to relation tuples in one or more namespaces and maintain secondary indices of the relation tuples. This can help clients create authorization-aware search indices for web frontends or other use cases.