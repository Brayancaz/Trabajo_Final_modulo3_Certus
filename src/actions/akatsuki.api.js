import { URL_API_NARUTO } from "./url";

export const GetAllAkatsuki = async () => {
  const response = await fetch(`${URL_API_NARUTO}/akatsuki`);
  const data = await response.json();
  return data;
};
