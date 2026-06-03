import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
export const ListProduct = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="price" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const EditProduct = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);

export const CreateProduct = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
);

export const DeleteProduct = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="name" />
      <TextField source="price" />
    </SimpleForm>
  </Edit>
);
