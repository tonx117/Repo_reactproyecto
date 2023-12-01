import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { LoginProtect } from "./routes/RutasProtegidas.jsx";
import { FaltaLogueo } from "./page/NoLogeado.jsx";
import { LoginProtect2 } from "./routes/RutasNoDisponibles.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Index } from "./page/Index.jsx";
import Cuenta from "./page/cuenta.jsx";
import RegisterForm from "./page/register.jsx";
import Servicios from "./page/Servicios.jsx";
import Wiki from "./page/Wiki.jsx";
import Formularios from "./page/Formularios.jsx";
import Contacto from "./page/Contacto.jsx";
import Checklist from "./page/Checklist.jsx";
import { Login } from "./page/login.jsx";
import Metalurgia from "./page/Metalurgia.jsx";
import Electricidad from "./page/Electricidad.jsx";
import Generales from "./page/Generales.jsx";
import Carpinteria from "./page/Carpinteria.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="613931270690-eem6ppm97d4bafm02mvet3im7e236vuc.apps.googleusercontent.com">
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/metalurgia" element={<Metalurgia />} />
          <Route path="/electricidad" element={<Electricidad />} />
          <Route path="/generales" element={<Generales />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/wiki" element={<Wiki />} />

          <Route path="/carpinteria" element={<Carpinteria />} />

          {/* Rutas protegidas */}
          <Route path="/checklist" element={<LoginProtect />}>
            <Route index element={<Checklist />} />
          </Route>

          <Route path="/nologin" element={<LoginProtect2 />}>
            <Route index element={<FaltaLogueo />} />
          </Route>

          <Route path="/account" element={<LoginProtect2 />}>
            <Route index element={<Cuenta />} />
          </Route>

          <Route path="/formularios" element={<LoginProtect />}>
            <Route index element={<Formularios />} />
          </Route>

          <Route path="/contacto" element={<LoginProtect />}>
            <Route index element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </GoogleOAuthProvider>
);
