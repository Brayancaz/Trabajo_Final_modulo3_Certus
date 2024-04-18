import { useLocation } from "react-router-dom";
import { Conten } from "./components/Conten";
import { NavBar } from "./components/NavBar";
import { AppRouters } from "./routers/AppRouters";
// import { DetalleCard } from "./components/DetalleCard";

export const PrincipalApp = () => {
  const location = useLocation();

  // const hideContent =
  //   location.pathname === "/" || location.pathname === "/misTarjetas";

  return (
    <>
      <NavBar />
      {/* {!hideContent && <Conten />} */}

      <AppRouters />
    </>
  );
};
