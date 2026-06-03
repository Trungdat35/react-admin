import { Datagrid, List, TextField } from "react-admin";

export const ListUser = (props: any) => (
  <List {...props}>
    <Datagrid>
        <TextField source="name" />
        <TextField source="email" />
    </Datagrid>
  </List>
);