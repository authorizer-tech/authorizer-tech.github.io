---
title: "Check a Subject's Access"
sidebar_position: 3
---

In the [prior step](./write-relation-tuple) we granted "subject1" the "member" relation to the "group1" object in the "groups" namespace, if we do an access [Check](../api-reference/check-service#check) we should get an allowed response.

```sh
grpcurl -plaintext -d \
'{
    "namespace": "groups",
    "object": "group1",
    "relation": "member",
    "subject": { "id" : "subject1" }
 }' localhost:50052 authorizer.accesscontroller.v1alpha1.CheckService.Check
```

You can see that the response matches this expectation `{ "allowed" : true }`.

Now let's remove the relation...

```sh
grpcurl -plaintext -d \
'{
    "relationTupleDeltas": [
        {
            "action": "ACTION_DELETE",
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

Verify "subject1" is no longer a member of "group1".

```sh
grpcurl -plaintext -d \
'{
    "namespace": "groups",
    "object": "group1",
    "relation": "member",
    "subject": { "id" : "subject1" }
 }' localhost:50052 authorizer.accesscontroller.v1alpha1.CheckService.Check
```

And now you get an empty response `{ }`, which indicates that `allowed` is false.

For more information on the API endpoint take a look at the [API Reference](../api-reference/check-service).