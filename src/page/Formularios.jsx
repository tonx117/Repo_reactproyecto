import React from "react";
import { Navbar } from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

export default function Formularios() {
  return (
    <section>
      <Navbar />
      <div className="wrap_cuenta">
        <div className="box">
          <div className="box-top">
            <img
              className="box-image"
              src="images/3.jpeg"
              alt="Imagen Formulario"
            />
            <div className="title-flex">
              <h3 className="box-title">Checklist</h3>
              <p className="user-follow-info">
                Formulario con medidas de seguridad
              </p>
            </div>
          </div>
          <Link to={"/checklist"}>Rellenar</Link>
        </div>
      </div>
    </section>
  );
}
