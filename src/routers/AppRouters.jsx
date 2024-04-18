import { Routes, Route, Navigate } from "react-router-dom";
import {
  PageAkatsuki,
  PageBestias,
  PageClanes,
  PageEquipos,
  PageHome,
  PagePersonajes,
  PageTarjetas,
  Page404,
} from "../pages";

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/personajes" element={<PagePersonajes />} />
      <Route path="/clanes" element={<PageClanes />} />
      <Route path="/equipos" element={<PageEquipos />} />
      <Route path="/akatsuki" element={<PageAkatsuki />} />
      <Route path="/bestiascolas" element={<PageBestias />} />
      <Route path="/misTarjetas" element={<PageTarjetas />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="/*" element={<Navigate to="404" />} />
    </Routes>
  );
};
