import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Index } from "./page/Index.jsx";
import Cuenta from "./page/cuenta.jsx";
import Register from "./page/register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Servicios from "./page/servicios.jsx";
import Wiki from "./page/wiki.jsx";
import Formularios from "./page/Formularios.jsx";
import Contacto from "./page/contacto.jsx";
import Checklist from "./page/checklist.jsx";
import { Login } from "./page/login.jsx";
import Metalurgia from "./page/metalurgia.jsx";
import Electricidad from "./page/electricidad.jsx";
import Generales from "./page/generales.jsx";
import Carpinteria from "./page/carpinteria.jsx";

const routes = [
  {
    path: "/",
    element: <Index />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/account",
    element: <Cuenta />,
  },

  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/metalurgia",
    element: <Metalurgia />,
  },

  {
    path: "/electricidad",
    element: <Electricidad />,
  },

  {
    path: "/generales",
    element: <Generales />,
  },

  {
    path: "/servicios",
    element: <Servicios />,
  },

  {
    path: "/wiki",
    element: <Wiki />,
  },

  {
    path: "/formularios",
    element: <Formularios />,
  },

  {
    path: "/contact",
    element: <Contacto />,
  },

  {
    path: "/checklist",
    element: <Checklist />,
  },

  {
    path: "/carpinteria",
    element: <Carpinteria />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
