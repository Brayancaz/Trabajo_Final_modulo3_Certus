import { URL_API_NARUTO } from "./url";

export const GetAllEquipos = async () => {
  const response = await fetch(`${URL_API_NARUTO}/team`);
  const data = await response.json();
  return data;
};
