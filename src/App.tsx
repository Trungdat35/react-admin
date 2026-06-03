import { Admin, CustomRoutes, Resource } from "react-admin";
import { CreateProduct, EditProduct, ListProduct } from "./components/Products";
import { dataProvider } from "./shared/provider/dataProvider";
import { authProvider } from "./shared/provider/authProvider";
import { ListUser } from "./components/Users";
import { Route } from "react-router-dom";
import { RoleRedirect } from "./shared/utils/RoleRedirect";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <CustomRoutes>
      <Route path="/" element={<RoleRedirect />} />
    </CustomRoutes>
    <Resource
      name="products"
      list={ListProduct}
      edit={EditProduct}
      create={CreateProduct}
    />
    <Resource name="users" list={ListUser} />
  </Admin>
);
