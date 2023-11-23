import React from "react";
import ReactDOM from "react-dom";
import { Index } from "./page/Index.jsx";
import Cuenta from "./page/cuenta.jsx";
import RegisterForm from "./page/register.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Servicios from "./page/servicios.jsx";
import Wiki from "./page/wiki.jsx";
import Formularios from "./page/Formularios.jsx";
import Contacto from "./page/contacto.jsx";
import Checklist from "./page/checklist.jsx";
import LoginForm from "./page/login.jsx";
import Metalurgia from "./page/metalurgia.jsx";
import Electricidad from "./page/electricidad.jsx";
import Generales from "./page/generales.jsx";
import Carpinteria from "./page/carpinteria.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/account" element={<Cuenta />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/metalurgia" element={<Metalurgia />} />
        <Route path="/electricidad" element={<Electricidad />} />
        <Route path="/generales" element={<Generales />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/formularios" element={<Formularios />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/carpinteria" element={<Carpinteria />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
