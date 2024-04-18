import { URL_API_NARUTO } from "./url";

export const GetAllPersonajes = async () => {
  const response = await fetch(`${URL_API_NARUTO}/character?page=1&limit=2000`);
  const data = await response.json();
  return data;
};

export const GetAllPersonajesCollection = async () => {
  const dataCollection = localStorage.getItem("collectionPersonajes");
  const data = dataCollection ? JSON.parse(dataCollection) : [];
  return data;
};
