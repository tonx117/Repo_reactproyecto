import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import "../public/nav.css";
import "../public/style.css";
export default function Cuenta() {
  return (
    <div>
      <Navbar />
      <div class="hero">
        <div class="hero_content">
          <h1 class="hero_title">Cuenta</h1>
          <div class="wrap_cuenta">
            <div class="box">
              <div class="box-top">
                <img
                  class="box-image"
                  src="images/1.jpeg"
                  alt="Imagen Register"
                />
                <div class="title-flex">
                  <h3 class="box-title">Registro</h3>
                  <p class="user-follow-info">Guardar tus datos en la página</p>
                </div>
              </div>
              <Link to={"/register"}>register</Link>
            </div>
            <div class="box">
              <div class="box-top">
                <img class="box-image" src="images/2.jpeg" alt="Imagen login" />
                <div class="title-flex">
                  <h3 class="box-title">Ingreso</h3>
                  <p class="user-follow-info">Ingresar a través de tu cuenta</p>
                </div>
              </div>
              <a href="/login" class="button">
                Ingresar
              </a>
            </div>
            <div class="box">
              <div class="box-top">
                <img
                  class="box-image"
                  src="images/perfil.png"
                  alt="Imagen perfil"
                />
                <div class="title-flex">
                  <h3 class="box-title">Perfil</h3>
                  <p class="user-follow-info">Información acerca de ti</p>
                </div>
              </div>
              <a href="#" class="button">
                Ver perfil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
