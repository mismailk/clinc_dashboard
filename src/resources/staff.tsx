// src/resources/staff.tsx
import {
  List, Datagrid, TextField,
  Edit, SimpleForm, TextInput,
  Create
} from "react-admin";

export const StaffList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="created_at" />
    </Datagrid>
  </List>
);

export const StaffEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
    </SimpleForm>
  </Edit>
);

export const StaffCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
    </SimpleForm>
  </Create>
);