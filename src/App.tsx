import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";

import { StaffList, StaffEdit, StaffCreate } from "./resources/staff";
import { PatientList, PatientEdit, PatientShow } from "./resources/patients";
import { ReservationList, ReservationEdit, ReservationCreate } from "./resources/reservations";

export default function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="Patient"
        list={PatientList}
        edit={PatientEdit}
        show={PatientShow}
      />

      <Resource
        name="Reservations"
        list={ReservationList}
        edit={ReservationEdit}
        create={ReservationCreate}
      />

      <Resource
        name="Staff"
        list={StaffList}
        edit={StaffEdit}
        create={StaffCreate}
      />
    </Admin>
  );
}