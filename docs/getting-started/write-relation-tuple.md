---
title: "Write a Relation Tuple"
sidebar_position: 2
---

The following code snippet(s) show how to introduce a new [relation tuple](../overview/concepts/relation-tuples). It
demonstrates adding a new member to a group in the "groups" namespace created earlier.

:::warning
Make sure you created the namespace configuration in the [previous step](./add-namespace-config).
:::

```sh
grpcurl -plaintext -d \
'{
    "relationTupleDeltas": [
        {
            "action": "ACTION_INSERT",
            "relationTuple": {
                "namespace": "groups",
                "object": "group1",
                "relation": "member",
                "subject": {
                    "id": "subject1"
                }
            }
        }
    ]
 }' localhost:50052 authorizer.accesscontroller.v1alpha1.WriteService.WriteRelationTuplesTxn
```

For more information on the API endpoint take a look at the [API Reference](../api-reference/write-service).