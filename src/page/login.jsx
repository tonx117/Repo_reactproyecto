import React from "react";

export const Login = () => {
  return (
    <section class="main">
      <figure class="main__figure">
        <img src="images/3343892.png" class="main__img" />
      </figure>

      <div class="main__contact">
        <h2 class="main__title">Hola Denuevo!</h2>
        <p class="main__paragraph">Bienvenido nuevamente!</p>

        <form class="main__form" id="formlogin">
          <input
            type="email"
            placeholder="ingrese su correo"
            class="main__input"
            id="correo"
          />

          <input
            type="password"
            placeholder="Contraseña"
            class="main__input"
            id="contraseña"
          />

          <input
            type="submit"
            value="Ingresar"
            class="main__input main__input--send"
          />
        </form>

        <a href="/register">Registrate aqui</a>

        <p class="main__paragraph">O continue con</p>

        <article class="main__social">
          <a href="#" class="main__link">
            <img src="images/google-icon.svg" class="main__icon" />
          </a>

          <a href="#" class="main__link">
            <img src="images/apple.svg" class="main__icon" />
          </a>

          <a href="#" class="main__link">
            <img src="images/facebook.svg" class="main__icon" />
          </a>
        </article>
      </div>
    </section>
  );
};
