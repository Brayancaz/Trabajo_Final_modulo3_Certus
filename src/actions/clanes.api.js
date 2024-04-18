import { URL_API_NARUTO } from "./url";

export const GetAllClanes = async () => {
  const response = await fetch(`${URL_API_NARUTO}/clan`);
  const data = await response.json();
  return data;
};
