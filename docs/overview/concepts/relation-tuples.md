---
sidebar_position: 0
---

# Relation Tuples
Relation tuples express relationships between [Objects](./objects.md) and [Subjects](./subjects.md). Each relation tuple
is associated with a [Namespace](./namespaces.md) which specifies the relations that can exist for objects within that
namespace.

Relation tuples are encoded as protobufs - an efficient binary encoding, but within the documentation a relation tuple is
expressed in text notation as follows:

```
<relation-tuple>  ::= <object>#<relation>@<subject>
<object>          ::= <namespace>:<object_id>
<subject>         ::= <subject_id> | <subject_set>
<subject_set>     ::= <object>#<relation>
```

For example, the relation tuple `groups:group1#member@user1` can be translated into the statement "user1 is a member of group1 within the groups namespace".

:::note
A `subject_set` allows ACLs to reference other groups of relation tuples and therefore can support representing nested group membership (e.g. recursive hierarchy). This feature of the modeling 
language is an extremely powerful feature and makes the model very expressive yet elegant.

For more information, please see the documentation on [Subject Sets](./subjects#subject-sets).
:::

## The ... relation (alias relation)
The `...` relation is a special alias relation implicitly defined on all namespaces.

It is used to reference a namespace as a whole, typically when you have a namespace defined to represent a subject or resource and want to include that subject or resource in another relation. It's mostly used in cases where you want to express hierarchical relationships.

## Examples
| Relation Tuple                                | Description                                                                                        |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------|
| `folders:folder1#viewer@groups:group1#member` | Members of 'group1' in the 'groups' namespace are viewers of 'folder1' in the 'folders' namespace. |
| `files:file1#editor@user1`                    | user1 is an editor of 'file1' in the 'files' namespace.                                            |
| `files:file1#parent@folders:folder1#...`      | 'file1' in the 'files' namespace is a child resource of 'folder1' in the 'folders' namespace.      |
| `groups:group1#member@groups:group0#member`   | 'group1' includes all of the members from 'group0' in the 'groups' namespace.                      |
| `groups:group0#member@user2`                  | user2 is a member of 'group0' in the 'groups' namespace.                                           |
| `groups:group1#member@user3`                  | user3 is a member of 'group1' in the 'groups' namespace.                                           |              |

In the third example we use the _alias relation_ `#...`, which creates a parent-child hierarchy between `folder1` and `file1` (file1 resides within folder1).

The fourth example in the table above is a great example of the expressiveness of this data modeling language. It expresses a recursive hierarchical relationship between groups of users, `group1` is a superset of `group0` with `user2` and `user3` being members. Whereas `group0` is a subset of `group1` with only `user2` as a member.