### Coding prompts: creating CRUD React Component

Example of using the CHAT GPT for creating a react component. The component is a set of given data with the possibility to create, delete, update (**CRUD**). For renderig data we use **React MUI**: [Drawer](https://mui.com/material-ui/react-drawer/), [MUI Data Grid](https://mui.com/x/react-data-grid/) and other UI components.

**`Model: GPT-4 `**

#### Prompts & result

❯_ `Create a new react component. Component is CRUD. To show data use the MUI Data Grid component. To add and update data use form in the Drawer component.  Data: Name, Email. Phone, Date, Time.`

**Result**:

Code: [response_01.jsx](https://github.com/ivanhala/coding-prompts-crud-react/blob/master/response_01.jsx)

![Screenshot showing result of the first prompt.](/assets/response_01.png)

---

❯_ `Make Delete and Edit icons inside rows.`

❯_ `it shows the following errors:`

❯_ `Line 23:26:  'handleEditUser' is not defined no-undef
Line 27:26:  'handleDeleteUser' is not defined no-undef`

**Result**:

Code: [response_02.jsx](https://github.com/ivanhala/coding-prompts-crud-react/blob/master/response_02.jsx)

![Screenshot showing final code.](/assets/response_02.gif)