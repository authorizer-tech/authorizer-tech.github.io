
# RBAC

Role-based Accss Control (RBAC) is one of many kinds of access-control models that can be used to enforce access to a particular resource. In an RBAC model a role is composed of a collection of permissions and you grant the role to a subject/user. The permissions determine what operations are allowed on a resource, but roles group or aggregate them. Using roles makes it easier to add, remove, and adjust permissions than assigning permissions to subjects individually. RBAC models can be extremely powerful from a permission-management perspective because they decouple (via a role) the assignment of permissions for a resource and the list of subjects who have the access.

You can use roles to define the collection of permissions for a specific API or set of APIs (this is what [Google IAM][1] and [AWS IAM][2] have done). For example, suppose you're building a project-management platform. The platform allows users to manage projects and tasks within a project. Project managers within an organization are responsible for creating projects and managing the tasks within them. A Projects API has permissions 'projects.create' and 'tasks.create' to create projects and tasks within a project, respectively. 

| Method | Endpoint            | Permission      |
|--------|---------------------|-----------------|
| POST   | /projects           | projects.create |
| POST   | /projects/:id/tasks | tasks.create    |

These permissions are included in a role 'Project Manager' that can assigned to the project managers so that they can perform their job function.

:::note
Before proceeding, make sure you're familiar with the notation used to define [relation tuples](../concepts/relation-tuples).
:::

To model the described RBAC API example above with the Authorizer platform, we can define the following relation tuples:

| namespace:object            | relation        | subject                            |
|-----------------------------|-----------------|------------------------------------|
| projects:/projects          | projects.create | permissions:projects.create#member |
| projects:/projects/1        | tasks.create    | permissions:tasks.create#member    |
| permissions:projects.create | member          | roles:project-manager#member       |
| permissions:tasks.create    | member          | roles:project-manager#member       |
| roles:project-manager       | member          | jim@example.com                    |

The relation tuples above give 'jim@example.com' the 'Projet Manager' role, which includes the permissions 'projects.create' and 'tasks.create'. Any subject who has the 'projects.create' and 'tasks.create' permissions can create a new project and add a task to an existing project, respectively.

This relation tuple model allows us to define the relationships between roles and their permissions independently of the relationships between a resource and the subject(s) who have access to the resource. Suppose we want to change the permissions included in the 'Project Manager' role, then all we have to do is mutate the permission-to-role relations defined on rows 3-4. Doing so leaves the relations for the resources unchanged (rows 1-2).

For an in-code demonstration of this example, please take a look at our official [authorizer-examples](https://github.com/authorizer-tech/authorizer-examples) repository.

[1]: https://cloud.google.com/iam/docs/overview#roles
[2]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html