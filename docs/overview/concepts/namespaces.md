---
sidebar_position: 1
---

# Namespaces
Before apps can write/read [relation tuples](./relation-tuples), they must configure one or more namespaces. A namespace configuration must specify a name and one or more [relation configurations](./namespaces#relation-configs) that are applicable to objects within that namespace. 


> A namespaces' purpose is to split up relation tuples into coherent partitions, each with its own unique configuration.

Each namespace has its own storage table in the database which allows storage specific options to be specified for that namespace.

Although namespaces are distributed across tables, their query space is _not_ isolated. Objects and relations within a namespace are scoped to that namespace, but [subject sets](./subjects#subject-sets) can reference across namespaces. For example, the relation tuple `files:file1#viewer@groups:group1#member` relates an object in the 'files' namespace to members of 'group1' in the 'groups' namespace.

## Relation Configs 
A namespace relation configuration must define one or more relations, which is an application-defined string (e.g. 'viewer' or 'editor') and an optional [subject set rewrite](./namespaces#subject-set-rewrites) configuration. For more information, refer to the [WriteConfig API](../../api-reference/writeconfig-api) documentation.

### Subject Set Rewrites
Subject set rewrite rules are defined per relation within a namespace. 

Although relation tuples reflect relationships between objects and subjects, they do not completely define the effective access-controls or ACLs for an object.


Some apps demand relationship models that express co-dependencies on other relationships. For example, an app might require subjects with the editor permission to have viewer permission on the same object. While such relationships between relations can be represented by a relation tuple per object, storing tuples in this denormalized fasion for each object in a namespace would be cumbersome, wasteful (in terms of storage), and
make it challenging to make modifications across all objects. Instead, apps can define object-agnostic relationships via subject set rewrite rules in relation configs.

:::note
A rewrite expression can also be composed of multiple sub-expressions, combined by operations such as union and intersection. See the [Advanced Rewrites](../examples/advanced-rewrites) example.
:::

#### Example
The following example demonstrates a simple namespace configuration with concentric relations, where viewer contains editor, and editor contains owner.

```
{
  "name": "documents",
  "relations": [
    { "name": "owner" },
    {
      "name": "editor",
      "rewrite": {
        "union": {
          "children": [
            { "_this": {} },
            {
              "computed_userset": { "relation": "owner" }
            }
          ]
        }
      }
    },
    {
      "name": "viewer",
      "rewrite": {
        "union": {
          "children": [
            { "_this": {} },
            {
              "computed_userset": { "relation": "editor" }
            }
          ]
        }
      }
    }
  ]
}
```

The namespace configuration above enumerates three possible application policies:

1. Any subject who has the 'owner' relation on a document is the document owner.
2. Any subject who has the 'editor' relation or is an owner of a document can edit the document.
3. Any subject who has the 'viewer' or 'editor' relation on a document can view the document.

## Naming Conventions
Namespaces _should_ use the plural form of the type of [objects](./objects) they describe (e.g. documents, images, organizations). Relations within a namespace should be a descriptor for what relationships a subject can have with/towards an object.


