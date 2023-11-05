import React from "react";

export const Login = () => {
  return (
    <section className="main">
      <figure className="main__figure">
        <img
          src="images/3343892.png"
          className="main__img"
          alt="Imagen de inicio de sesión"
        />
      </figure>

      <div className="main__contact">
        <h2 className="main__title">¡Hola de nuevo!</h2>
        <p className="main__paragraph">Bienvenido nuevamente.</p>

        <form className="main__form" id="formlogin">
          <input
            type="email"
            placeholder="Ingrese su correo"
            className="main__input"
            id="correo"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="main__input"
            id="contraseña"
          />

          <input
            type="submit"
            value="Ingresar"
            className="main__input main__input--send"
          />
        </form>

        <a href="/register">Regístrate aquí</a>

        <p className="main__paragraph">O continúa con</p>

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
};
