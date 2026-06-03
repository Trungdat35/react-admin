import { useEffect } from "react";
import { useRedirect } from "react-admin";

export const RoleRedirect = () => {
  const redirect = useRedirect();

  useEffect(() => {
    const role = JSON.parse(
      localStorage.getItem("user") || "{}"
    ).role;

    redirect(
      role === "admin"
        ? "/users"
        : "/products"
    );
  }, [redirect]);

  return null;
};