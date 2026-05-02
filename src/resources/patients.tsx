// src/resources/patients.tsx
import {
  List, Datagrid, TextField,
  Edit, SimpleForm, TextInput,
  Show, SimpleShowLayout
} from "react-admin";

export const PatientList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="phone" />
      <TextField source="address" />
    </Datagrid>
  </List>
);

export const PatientEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="address" />
    </SimpleForm>
  </Edit>
);

export const PatientShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="phone" />
      <TextField source="address" />
      <TextField source="created_at" />
    </SimpleShowLayout>
  </Show>
);