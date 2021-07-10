
# ABAC

Attribute-based Access Control (ABAC) is an access-control model that can be used to enforce more fine-grained access to a particular resource when compared to [RBAC](./rbac) models. In an ABAC model access to a set of resources is governed by one or more attributes of the resource, the subject taking action on the resource, a combination of both of these, or any other application context (e.g. environmental factors or conditions). The attributes that govern the access policy for a resource or set of resources is specified by the application that is enforcing acccess controls on the resources. It is up to the application to chose how to map application or environmental attributes to the policies that protect resources.

----

Suppose that you're building an HR management platform. Your platform wants to enforce an access policy that allows any users/subjects within an organization who are managers and part of the HR department to manage the payroll for employess, but only during the work week (Monday-Friday). A Payroll API defines methods to manage employee payroll. Each payroll resource has some unique identifier associated with it.


| Method | Endpoint | Headers |
|--------|----------|---------|
| PUT    | /payrolls/:id | <ul><li><b>Authorization</b>: <i>Bearer < token ></i></li></ul> |

:::note
Before proceeding, make sure you're familiar with the notation used to define [relation tuples](../concepts/relation-tuples).
:::

The application could write, using the [WriteService API](../../api-reference#writeservice), a [relation tuple](../concepts/relation-tuples) that uses an [object](../concepts/objects) identifier that is computed by generating a v5 UUID with the desired attributes that define the access policy described above. For example,

```
type AccessAttributes struct {
    EmployeeType string
    Department   string
    Workday      bool
}

requiredAttrs := AccessAttributes{
    EmployeeType: "manager",
    Department: "HR",
    Workday: true,
}

namespace := "payroll-manager"
objectID := "/payrolls/1"
relation := "payroll.update"
requiredSubjectID := uuidv5(requiredAttrs) // 3b82244a-0b1c-5886-9062-2ddfb56afcce

// NOTE: This is not the official write API call, it's just an example
write(namespace, objectID, relation, requiredSubjectID)
```

The snippet above grants the 'payroll.update' permission for the '/payrolls/1' resource to any subject whose attributes are computed to have the same subject identifier as the one computed.

| namespace:object | relation | subject |
|------------------|----------|---------|
| payroll-manager:/payrolls/1 | payroll.update | 3b82244a-0b1c-5886-9062-2ddfb56afcce |

When the application receives a request to update a payroll resource, the application can check if the incoming subject matches the required subject written earlier. For example, the app can do the following:

```
// UpdatePayroll is the request handler to update a payroll resource.
func UpdatePayroll(w *http.ResponseWriter, req *http.Request) {

    token := strings.TrimPrefix(req.Header.Get("Authorization"), "Bearer ")
    subjectInfo := token.Decode()
    day := time.Now().Weekday()

    subjectAttrs := AccessAttributes{
        EmployeeType: subjectInfo.EmployeeType,
        Department: subjectInfo.Department,
        Workday: day == Monday || day == Tuesday || day == Wednesday || day == Thursday || day == Friday
    }

    namespace := "payroll-manager"
    objectID := "/payrolls/1"
    relation := "payroll.update"
    subjectID := uuidv5(subjectAttrs)

    // Use the Check API to check if the access is permitted
    if Check(namespace, objectID, relation, subjectID) {
        w.WriteHeader(http.StatusOK)
        w.Write("authorized")
    } else {
        w.WriteHeader(http.StatusUnauthorized)
        w.Write("unauthorized")
    }
}
```

With this approach you can use the Authorizer to enforce a variety of fine-grained access controls based on ABAC models. This example just showed how you can enforce an ABAC model that requires certain subject attributes as well as attributes of the environmental context to enforce a particular access policy.

For an official in-code demonstration of this example, please take a look at our official [authorizer-examples](https://github.com/authorizer-tech/authorizer-examples) repository.