---
sidebar_position: 3
---

# Subjects
A Subject is a polymorphic data-type. It can take one of two values: a single uniquely identifiable subject (e.g. [Subject ID](./subjects#subject-id)) or a subject can take a value representing a set of subjects (e.g. [Subject Sets](./subjects#subject-sets)).

## Subject ID
A subject ID can be any string. It is the app's responsibility to map the subjects taking action within the app to a constant, unique identifier.

:::note
Although a subject ID can be any string, __it is encouraged to use a globally unique UUID__ of some form (uuidv4 or similar).
:::

### Example
Let's say you're building an app that has end-users making API calls into your platform. Each user is uniquely idenfitied with a strictly increasing database key within a schema specific to that user's tenant (this app manages multi-tenancy with a schema-per-tenant model).

The app could choose to map `(<tenant>, <user-id>)` pairs to an appropriate UUID and use the UUID as the
subject ID when writing relation tuples. Alternatively, the app could choose to use the `<tenant>/<user-id>`  string (e.g. `tenant1/user1`) to identify the subjectID, so long as this string is guaranteed to be unique within the app.

## Subject Sets
A subject set defines the set of all subjects that have a specific relation to an object. Subject sets can "point to" or reference other subject sets, thus creating flexible pointer-chain references of hierarchical definitions (see [Hierarchy example](../examples/hierarchy)). Subject sets allow models that define Role-based Access Control (see [RBAC example](../examples/rbac.md)) polcies and other inheritance based relationships.

### Example
Consider the following table of relation tuples:

```
| namespace:object | relation    | subject              |
|------------------|-------------|----------------------|
| groups:group0    | member      | user1                |
| groups:group1    | member      | groups:group0#member |
| teams:team0      | participant | groups:group1#member |
```

Using subject sets we create a recursive hierarchical relationship between teams and groups of users. In this example we have expressed the following statement "Anyone who is a member of 'group0' is also a member of 'group1' in the 'groups' namespace, and anyone who is in 'group1' is a participant of 'team0' in the 'teams' namespace.

