---
title: "📚 API Reference"
sidebar_position: 3
---
:::note
The Authorizer platform supports a standard HTTP/JSON API or [grpc](https://grpc.io) APIs backed by [protocol-buffers](https://developers.google.com/protocol-buffers).

Support for the HTTP/JSON API comes from the [grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway) package which
is a gRPC to JSON proxy generator that follows the standard [gRPC and HTTP transcoding spec](https://google.aip.dev/127).
:::


## CheckService
**Package**: authorizer.accesscontroller.v1alpha1

The service that performs access-control checks
based on stored Access Control Lists.

### Check
> **rpc** Check([CheckRequest](#checkrequest))
    [CheckResponse](#checkresponse)

Check performs an access-control check by looking up if a specific subject
is related to an object.

## ExpandService
**Package**: authorizer.accesscontroller.v1alpha1

The service to serve Expand RPC requests.

### Expand
> **rpc** Expand([ExpandRequest](#expandrequest))
    [ExpandResponse](#expandresponse)

Expands all the relation tuples for all of the subjects given
in the SubjectSet.

Expand follows direct and indirect SubjectSets in a depth-first fashion.

## NamespaceConfigService
**Package**: authorizer.accesscontroller.v1alpha1

The service to administer namespace configurations.

### WriteConfig
> **rpc** WriteConfig([WriteConfigRequest](#writeconfigrequest))
    [WriteConfigResponse](#writeconfigresponse)

WriteConfig upserts a namespace configuration.

If the namespace config already exists, the existing one is overwritten. If the new 
namespace config removes an existing relation, there must not be any relation tuples 
that reference it. Otherwise a FAILED_PRECONDITION status is returned.

To migrate away from a relation, please move all existing relation tuples referencing 
it over to the new relation and then delete the old relation once all tuples have been 
migrated.### ReadConfig
> **rpc** ReadConfig([ReadConfigRequest](#readconfigrequest))
    [ReadConfigResponse](#readconfigresponse)

Read a namespace configuration.

## ReadService
**Package**: authorizer.accesscontroller.v1alpha1

A service to query Access Control Lists.

### ListRelationTuples
> **rpc** ListRelationTuples([ListRelationTuplesRequest](#listrelationtuplesrequest))
    [ListRelationTuplesResponse](#listrelationtuplesresponse)

Lists relation tuples.

**NOTE**: This does not follow direct or indirect references through rewrites. If you 
need to follow indirect references through rewrites, please use the Expand API.

## WriteService
**Package**: authorizer.accesscontroller.v1alpha1

A service that defines APIs to manage relation tuple ACLs.

### WriteRelationTuplesTxn
> **rpc** WriteRelationTuplesTxn([WriteRelationTuplesTxnRequest](#writerelationtuplestxnrequest))
    [WriteRelationTuplesTxnResponse](#writerelationtuplestxnresponse)

Mutates one or more relation tuples within a single transaction.

## WatchService
**Package**: authorizer.accesswatcher.v1alpha1

A service defining APIs to watch for changes to namespaces.

### Watch
> **rpc** Watch([WatchRequest](#watchrequest))
    [WatchResponse](#watchresponse)

Watches for changes to relation tuples in one or more namespaces.

## Messages
### RelationTuple {#relationtuple}
RelationTuple relates an object with a subject.

While a tuple reflects a relationship between object
and subject, they do not completely define the effective ACLs.

| Field | Type | Description |
| ----- | ---- | ----------- |
| namespace | [ string](#string) | The namespace this relation tuple lives in. |
| object | [ string](#string) | The object identifier related by this tuple.<br/><br/>Objects live within the namespace of the tuple. |
| relation | [ string](#string) | The relation between the Object and the Subject. |
| subject | [ Subject](#subject) | The subject related by this tuple. |

### Subject {#subject}
Subject is either a concrete subject id string or
a SubjectSet expanding to more Subjects.

| Field | Type | Description |
| ----- | ---- | ----------- |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) ref.id | [ string](#string) | A concrete subject id string for the subject. |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) ref.set | [ SubjectSet](#subjectset) | A SubjectSet that expands to more Subjects. |

### SubjectSet {#subjectset}
A SubjectSet refers to all subjects which have the same
relation to an object.

| Field | Type | Description |
| ----- | ---- | ----------- |
| namespace | [ string](#string) | The namespace of the object and relation referenced in this SubjectSet. |
| object | [ string](#string) | The object selected by the subjects. |
| relation | [ string](#string) | The relation between the object and the subject(s). |


### CheckRequest {#checkrequest}
The request for a CheckService.Check rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| namespace | [ string](#string) | The namespace to evaluate the check within. |
| object | [ string](#string) | The object to check. |
| relation | [ string](#string) | The relation between the object and the subject. |
| subject | [ Subject](#subject) | The subject to check. |
| snaptoken | [ string](#string) | Optional. The snapshot token that encodes the evaluation timestamp that this request will be evaluated no earlier than.<br/><br/>If no snapshot token is provided the check request is evaluated against the most recently replicated version of the relation tuple storage. Leaving an empty snapshot token will reflect the latest changes, but it may incur a read penalty because the reads have to be directed toward the leaseholder of the replica that serves the data.<br/><br/>We call requests without a snapshot token a content-change check, because such requests require a round-trip read but return the most recent writes and are thus good candidates for checking real-time content changes before an object is persisted. |

### CheckResponse {#checkresponse}
The response for a CheckService.Check rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| allowed | [ bool](#bool) | A boolean indicating if the specified subject is related to the requested object.<br/><br/>It is false by default if no ACL matches. |
| snaptoken | [ string](#string) | A snapshot token encoding the snapshot evaluation timestamp that the request was evaluated at. |


### ExpandRequest {#expandrequest}
The request for an ExpandService.Expand rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| subject_set | [ SubjectSet](#subjectset) | The SubjectSet to expand. |
| snaptoken | [ string](#string) | Optional. The snapshot token that encodes the evaluation timestamp that this request will be evaluated no earlier than.<br/><br/>If no snapshot token is provided the expand request is evaluated against the most recently replicated version of the relation tuple storage. Leaving an empty snapshot token will reflect the latest changes, but it may incur a read penalty because the reads have to be directed toward the leaseholder of the replica that serves the data. |

### ExpandResponse {#expandresponse}
The response for an ExpandService.Expand rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| tree | [ SubjectTree](#subjecttree) | The tree the requested SubjectSet expands to. The requested SubjectSet is the subject of the root.<br/><br/>This field can be nil in some circumstances. |

### SubjectTree {#subjecttree}


| Field | Type | Description |
| ----- | ---- | ----------- |
| node_type | [ NodeType](#nodetype) | The type of the node. |
| subject | [ Subject](#subject) | The subject this node represents. |
| children | [repeated SubjectTree](#subjecttree) | The children of this node.<br/><br/>This is unset if `node_type` is `NODE_TYPE_LEAF`. |


### ComputedSubjectset {#computedsubjectset}
Computes the set of subjects that have the included relation within the
same namespace.

This is useful to follow relations between an object and subject within
the same namespace. If you want anyone with an 'editor' relation to also
have 'viewer' this would be a good fit.

| Field | Type | Description |
| ----- | ---- | ----------- |
| relation | [ string](#string) | none |

### NamespaceConfig {#namespaceconfig}
A namespace config defines the relations that exist between objects and subjects in
in a namespace.

| Field | Type | Description |
| ----- | ---- | ----------- |
| name | [ string](#string) | The name of the namespace. |
| relations | [repeated Relation](#relation) | The relations that this namespace defines. |

### ReadConfigRequest {#readconfigrequest}
The request for a NamespaceConfigService.ReadConfig rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| namespace | [ string](#string) | The namespace whose config should be read. |

### ReadConfigResponse {#readconfigresponse}
The response for a NamespaceConfigService.ReadConfig rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| namespace | [ string](#string) | The namespace of the config. |
| config | [ NamespaceConfig](#namespaceconfig) | The namespace config for the given namespace. |

### Relation {#relation}
A Relation defines a type of relationship between an object and subject.

Relations can have rewrite rules that specify how the relation is
computed relative to other relations defined within the same namespace
or across other namespaces.

| Field | Type | Description |
| ----- | ---- | ----------- |
| name | [ string](#string) | The name of the relation (e.g. viewer, editor, or member). |
| rewrite | [ Rewrite](#rewrite) | The rewrite rule for this relation, or nil if it references itself. |

### Rewrite {#rewrite}
Rewrites define sub-expressions that combine operations such as union or intersection. A rewrite
sub-expression can be recursive and thus allows arbitrary logical expressions to be constructed.

| Field | Type | Description |
| ----- | ---- | ----------- |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) rewrite_operation.union | [ SetOperation](#setoperation) | Joins the children of the rewrite via set union. |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) rewrite_operation.intersection | [ SetOperation](#setoperation) | Joins the children of the rewrite via set intersection. |

### SetOperation {#setoperation}


| Field | Type | Description |
| ----- | ---- | ----------- |
| children | [repeated SetOperation.Child](#setoperationchild) | none |

### SetOperation.Child {#setoperationchild}


| Field | Type | Description |
| ----- | ---- | ----------- |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) child_type.this | [ SetOperation.Child.This](#setoperationchildthis) | none |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) child_type.computed_subjectset | [ ComputedSubjectset](#computedsubjectset) | none |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) child_type.tuple_to_subjectset | [ TupleToSubjectset](#tupletosubjectset) | none |
| [**oneof**](https://developers.google.com/protocol-buffers/docs/proto3#oneof) child_type.rewrite | [ Rewrite](#rewrite) | none |

### SetOperation.Child.This {#setoperationchildthis}
This references the defined relation directly.

| Field | Type | Description |
| ----- | ---- | ----------- |

### TupleToSubjectset {#tupletosubjectset}
Computes a tupleset from the input object, fetches relation tuples matching the
tupleset, and computes the set of subjects from every fetched relation tuple.

This is useful to lookup relations in other namespaces or to create complex hierarchies
between objects in multiple namespaces.

| Field | Type | Description |
| ----- | ---- | ----------- |
| tupleset | [ TupleToSubjectset.Tupleset](#tupletosubjectsettupleset) | A tupleset defining the relation tuples that relate to the set of subjects that this TupleToSubjectset applies to. |
| computed_subjectset | [ ComputedSubjectset](#computedsubjectset) | The computed set of subjects that are looked up based on the expanded tupleset. |

### TupleToSubjectset.Tupleset {#tupletosubjectsettupleset}


| Field | Type | Description |
| ----- | ---- | ----------- |
| relation | [ string](#string) | none |

### WriteConfigRequest {#writeconfigrequest}
The request for a NamespaceConfigService.WriteConfig rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| config | [ NamespaceConfig](#namespaceconfig) | The namespace config to upsert. |

### WriteConfigResponse {#writeconfigresponse}
The response for a NamespaceConfigService.WriteConfig rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |


### ListRelationTuplesRequest {#listrelationtuplesrequest}


| Field | Type | Description |
| ----- | ---- | ----------- |
| query | [ ListRelationTuplesRequest.Query](#listrelationtuplesrequestquery) | All field constraints are concatenated with a logical AND operator. |
| snaptoken | [ string](#string) | Optional. The snapshot token that encodes the evaluation timestamp that this request will be evaluated no earlier than. |
| page_size | [ int32](#int32) | Optional. The maximum number of RelationTuples to return in the response. |
| page_token | [ string](#string) | Optional. A pagination token returned from a previous call to `ListRelationTuples` that indicates where the page should start at. |

### ListRelationTuplesRequest.Query {#listrelationtuplesrequestquery}
The query for listing relation tuples. Clients can
specify any optional field to partially filter for
specific relation tuples.

Example use cases:
 - object only: display a list of all ACLs of one object
 - relation only: get all groups that have members; e.g. get all directories that have content
 - object & relation: display all subjects that have e.g. write relation
 - subject & relation: display all groups a subject belongs to/display all objects a subject has access to
 - object & relation & subject: check whether the relation tuple already exists, before writing it

| Field | Type | Description |
| ----- | ---- | ----------- |
| namespace | [ string](#string) | Required. The namespace to query. |
| object | [ string](#string) | Optional. |
| relations | [repeated string](#string) | Optional. |
| subject | [ Subject](#subject) | Optional. |

### ListRelationTuplesResponse {#listrelationtuplesresponse}


| Field | Type | Description |
| ----- | ---- | ----------- |
| relation_tuples | [repeated RelationTuple](#relationtuple) | The relation tuples matching the request query.<br/><br/>The RelationTuple list is ordered from the newest RelationTuple to the oldest. |
| next_page_token | [ string](#string) | The token required to paginate to the next page. |
| is_last_page | [ bool](#bool) | Indicates if this is the last page of paginated data. If `is_last_page` is true then using `next_page_token` in subsequent requests will return an error. |


### RelationTupleDelta {#relationtupledelta}
Write-delta for a WriteRelationTuplesTxnRequest.

| Field | Type | Description |
| ----- | ---- | ----------- |
| action | [ RelationTupleDelta.Action](#relationtupledeltaaction) | The action to do on the RelationTuple. |
| relation_tuple | [ RelationTuple](#relationtuple) | The target RelationTuple. |

### WriteRelationTuplesTxnRequest {#writerelationtuplestxnrequest}
The request of a WriteService.WriteRelationTuplesTxn rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| relation_tuple_deltas | [repeated RelationTupleDelta](#relationtupledelta) | The write delta for the relation tuples operated in one single transaction. Either all actions commit or no changes take effect on error. |

### WriteRelationTuplesTxnResponse {#writerelationtuplestxnresponse}
The response of a WriteService.WriteRelationTuplesTxn rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| snaptokens | [repeated string](#string) | The list of the new latest snapshot tokens of the affected RelationTuple, with the same index as specified in the `relation_tuple_deltas` field of the WriteRelationTuplesTxnRequest request.<br/><br/>If the RelationTupleDelta_Action was DELETE the snaptoken is empty at the same index. |

### WatchRequest {#watchrequest}
The request for a WatchService.Watch rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| namespaces | [repeated string](#string) | The namespaces to start watching for changes to. |
| snaptoken | [ string](#string) | A snapshot token encoding a timestamp where changes should start watching from. |


### WatchResponse {#watchresponse}
The response for a WatchService.Watch rpc.

| Field | Type | Description |
| ----- | ---- | ----------- |
| relation_tuple_delta | [ RelationTupleDelta](#relationtupledelta) | The relation tuple delta that occurred. |
| snaptoken | [ string](#string) | A snapshot token encoding the timestamp of the relation tuple change. |


## Enums


### NodeType {#nodetype}
An enumeration defining types of nodes within a SubjectTree.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NODE_TYPE_UNSPECIFIED | 0 | none |
| NODE_TYPE_UNION | 1 | A node type which expands to a union of all children. |
| NODE_TYPE_INTERSECTION | 3 | A node type which expands to an intersection of the children. |
| NODE_TYPE_LEAF | 4 | A node type which is a leaf and contains no children.<br/><br/>Its Subject is a subject id string unless the maximum call depth was reached. |




### RelationTupleDelta.Action {#relationtupledeltaaction}
An enumeration defining the actions or mutations that can be done on a RelationTuple.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ACTION_UNSPECIFIED | 0 | An unspecified action.<br/><br/>The `WriteRelationTuplesTxn` rpc ignores RelationTupleDeltas with an unspecified action. |
| ACTION_INSERT | 1 | Upserts a new RelationTuple.<br/><br/>If the RelationTuple already exists no modification is done. |
| ACTION_DELETE | 4 | Deletes the RelationTuple.<br/><br/>If the RelationTuple does not exist it's a no-op. |




## Scalar Value Types
| .proto Type | Notes | Go | C++ | Java | Python | C# | PHP | Ruby |
| ----------- | ----- | -- | --- | ---- | ------ | -- | --- | ---- |
| <div><h4 id="double" /></div><a name="double" /> double |  | float64 | double | double | float | double | float | Float |
| <div><h4 id="float" /></div><a name="float" /> float |  | float32 | float | float | float | float | float | Float |
| <div><h4 id="int32" /></div><a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int32 | int | int | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="int64" /></div><a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | int64 | long | int/long | long | integer/string | Bignum |
| <div><h4 id="uint32" /></div><a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | uint32 | int | int/long | uint | integer | Bignum or Fixnum (as required) |
| <div><h4 id="uint64" /></div><a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | uint64 | long | int/long | ulong | integer/string | Bignum or Fixnum (as required) |
| <div><h4 id="sint32" /></div><a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int32 | int | int | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="sint64" /></div><a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | int64 | long | int/long | long | integer/string | Bignum |
| <div><h4 id="fixed32" /></div><a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | uint32 | int | int | uint | integer | Bignum or Fixnum (as required) |
| <div><h4 id="fixed64" /></div><a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | uint64 | long | int/long | ulong | integer/string | Bignum |
| <div><h4 id="sfixed32" /></div><a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int32 | int | int | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="sfixed64" /></div><a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | int64 | long | int/long | long | integer/string | Bignum |
| <div><h4 id="bool" /></div><a name="bool" /> bool |  | bool | bool | boolean | boolean | bool | boolean | TrueClass/FalseClass |
| <div><h4 id="string" /></div><a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | string | String | str/unicode | string | string | String (UTF-8) |
| <div><h4 id="bytes" /></div><a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | []byte | string | ByteString | str | ByteString | string | String (ASCII-8BIT) |
