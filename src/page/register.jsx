import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="main">
      <figure className="main__figure">
        <img
          src="images/3343892.png"
          className="main__img"
          alt="Imagen de registro"
        />
      </figure>

      <div className="main__contact">
        <h2 className="main__title">¡Bienvenido!</h2>
        <p className="main__paragraph">
          Por favor, ingrese los datos a continuación
        </p>

        <form className="main__form" id="formregister">
          <input
            type="text"
            placeholder="Ingrese su nombre"
            className="main__input"
            id="nombreregistro"
            required
          />

          <input
            type="text"
            placeholder="Ingrese su apellido"
            className="main__input"
            required
            id="apellidoregistro"
          />

          <input
            type="tel"
            placeholder="Ingrese su número de teléfono"
            className="main__input"
            id="telefonoregistro"
          />

          <input
            type="email"
            placeholder="Ingrese su correo electrónico"
            className="main__input"
            required
            id="correoregistro"
          />

          <input
            type="password"
            placeholder="Ingrese su contraseña"
            className="main__input"
            required
            id="contraseñaregistro"
          />

          <input
            type="submit"
            value="Registrarse"
            className="main__input main__input--send"
          />
        </form>
        <Link to={"/login"}>
          <a href="/login">¿Ya tienes una cuenta?</a>
        </Link>

        <p className="main__paragraph">O continúe con</p>

        <article className="main__social">
          <a href="#" className="main__link">
            <img
              src="images/google-icon.svg"
              className="main__icon"
              alt="Google"
            />
          </a>

          <a href="#" className="main__link">
            <img src="images/apple.svg" className="main__icon" alt="Apple" />
          </a>

          <a href="#" className="main__link">
            <img
              src="images/facebook.svg"
              className="main__icon"
              alt="Facebook"
            />
          </a>
        </article>
      </div>
    </section>
  );
}
