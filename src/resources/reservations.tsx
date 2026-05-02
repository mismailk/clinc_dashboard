// src/resources/reservations.tsx
import {
  List, Datagrid, TextField,
  DateField,
  Edit, SimpleForm,
  TextInput, DateInput,
  SelectInput, Create
} from "react-admin";

export const ReservationList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="patient_id" />
      <TextField source="slot_id" />
      <DateField source="reservation_day" />
      <TextField source="reservation_time" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const ReservationEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="patient_id" disabled />
      <TextInput source="slot_id" />
      <DateInput source="reservation_day" />
      <TextInput source="reservation_time" />

      <SelectInput
        source="status"
        choices={[
          { id: "pending", name: "Pending" },
          { id: "confirmed", name: "Confirmed" },
          { id: "cancelled", name: "Cancelled" },
        ]}
      />

      <TextInput source="doctor_notes" multiline />
      <TextInput source="prescription" multiline />
    </SimpleForm>
  </Edit>
);

export const ReservationCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="patient_id" />
      <TextInput source="slot_id" />
      <DateInput source="reservation_day" />
      <TextInput source="reservation_time" />

      <SelectInput
        source="status"
        choices={[
          { id: "pending", name: "Pending" },
          { id: "confirmed", name: "Confirmed" },
        ]}
      />
    </SimpleForm>
  </Create>
);