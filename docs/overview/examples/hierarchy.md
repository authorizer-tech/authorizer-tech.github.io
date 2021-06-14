
# Hierarchical Permissions
The authorizer platform can model a variety of hierarchical relationships. The hierarchy can be defined through [SubjectSet rewrites](../concepts/namespaces#subject-set-rewrites) or
explicitly via [relation tuples](../concepts/relation-tuples) between two objects or using both. The following example demonstrates using SubjectSet rewrites and parent relationships to model a parent/child hierarchy.

----

Pretend we have an app that manages Projects and Tasks. Tasks get created under a single project. A project can have multiple tasks under it. 

Let's say we have two tasks (task1 and task2) and they are children under their parent project (project1). So we have a relation tuple table that looks like this:

| namespace:object  | relation | subject               |
|-------------------|----------|-----------------------|
| tasks:task1       | parent   | projects:project1#... |
| tasks:task2       | parent   | projects:project1#... |
| projects:project1 | viewer   | user1                 |

We define two namespace configurations, one for 'projects' and one for 'tasks', as follows:
```json
{
    "name": "projects",
    "relations": [
        {
            "name" "viewer"
        }
    ]
}

{
    "name": "tasks",
    "relations": [
        {
            "name": "viewer",
            "rewrite": {
                "union": {
                    "children": [
                        {
                            "tupleToSubjectSet": {
                                "tupleset": { "relation": "parent" },
                                "computedSubjectSet": { "relation": "viewer" }
                            }
                        }
                    ]
                }
            }
        }
    ]
}
```

These namespace configurations express the following policies:
* Anyone who is a viewer of a project can view the project.
* Anyone who can view a project can view all tasks under the project.

If we issue a [Check](../../api-reference/check-api) request of the form `Check(tasks:task1#viewer@user1)` it'll evaluate parent relationships via SubjectSet rewrites and
will return a truthy outcome because project1 is the parent of task1 and project1 has a viewer 'user1'.