---
sidebar_position: 2
---

# Objects
Objects are unique identifiers for a resource provided by some app. It is an app's responsibility to choose how to map resource identifiers within the app to an Object, and generally they should be one-to-one.

:::note
Although an Object can be any string, __it is encouraged to use a globally unique UUID__ of some form (uuidv4 or similar).
:::

## Example
Consider an app that uses strictly increasing database keys to identify resources within a database table. 

The app could choose to map `(<resource-type>, <resource-id>)` pairs to an appropriate UUID and use the UUID as the subject ID when writing relation tuples. Alternatively, the app could choose to use the `<resource-type>/<resource-id>` string (e.g. `documents/1`) to identify the subjectID, so long as this string is guaranteed to be unique within the app.