import { AuthProvider } from "react-admin";
import { dataProvider } from "./dataProvider";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const { data } = await dataProvider.getList("users", {
      pagination: {
        page: 1,
        perPage: 1,
      },
      sort: {
        field: "id",
        order: "ASC",
      },
      filter: {
        email: username,
        password,
      },
    });

    if (!data.length) {
      throw new Error("Email hoặc mật khẩu không đúng");
    }

    localStorage.setItem("user", JSON.stringify(data[0]));

    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem("user")
      ? Promise.resolve()
      : Promise.reject(),

  checkError: () => Promise.resolve(),

  getPermissions: () => Promise.resolve(),

  getIdentity: async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return {
      id: user.id,
      fullName: user.name,
    };
  },
};