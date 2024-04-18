import React from "react";
import ReactDOM from "react-dom/client";
import { PrincipalApp } from "./PrincipalApp";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <PrincipalApp />
    </React.StrictMode>
  </BrowserRouter>
);
