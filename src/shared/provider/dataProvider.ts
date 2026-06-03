import jsonServerProvider from "ra-data-json-server";
import { API_URL } from "../utils/constants";

export const dataProvider = jsonServerProvider(
  API_URL
);