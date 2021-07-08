
# Pre-built Binaries
Pre-built binaries are included in every release of the [access-controller][1], [access-watcher][2], and [access-indexer][3]. Setup instructions are specific to a given release, so please refer to the project for more specific instructions.

For more information on the configurations and environment variables take a look at the [Configuration](../../configuration) page.

## access-controller
Refer to the [official documentation](https://github.com/authorizer-tech/access-controller#pre-compiled-binaries) on how to run the access-controller with a pre-compiled binary.

## access-watcher
:::note
The access-watcher depends on the [Changelog](../../overview/architecture#changelog) that is initialized by the first access-controller that starts up (for first time deployments).

Please make sure that your access-controller deployment has completed before launching the access-watcher.
:::

Refer to the [official documentation](https://github.com/authorizer-tech/access-watcher#pre-compiled-binaries) on how to run the access-watcher with a pre-compiled binary.

## access-indexer
Coming soon!

[1]: https://github.com/authorizer-tech/access-controller
[2]: https://github.com/authorizer-tech/access-watcher
[3]: https://github.com/authorizer-tech/access-indexer