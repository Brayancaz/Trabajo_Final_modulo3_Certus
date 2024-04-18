import { URL_API_NARUTO } from "./url";

export const GetAllBijus = async () => {
  const response = await fetch(`${URL_API_NARUTO}/tailed-beast`);
  const data = await response.json();
  return data;
};
