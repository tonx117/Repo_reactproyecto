import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:4000/api/usuario/login", {
      correo,
      contraseña,
    });

    console.log(response.data);

    if (response.status !== 201 && response.status !== 200) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Usuario logueado correctamente",
      text: "Usuario logueado correctamente",
    });

    setCorreo('');
    setContraseña('');

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <section className="main">
      <div className="main__contact">
        <h2 className="main__title">Hola Denuevo!</h2>
        <p className="main__paragraph">Bienvenido nuevamente!</p>

        <form className="main__form" id="formlogin" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="ingrese su correo"
            className="main__input"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="main__input"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />

          <input
            type="submit"
            value="Ingresar"
            className="main__input main__input--send"
          />
        </form>

        <a href="/register">Registrate aqui</a>

        <p className="main__paragraph">O continue con</p>

        <article className="main__social">
          <a href="#" className="main__link">
            <img src="images/google-icon.svg" className="main__icon" />
          </a>

          <a href="#" className="main__link">
            <img src="images/apple.svg" className="main__icon" />
          </a>

          <a href="#" className="main__link">
            <img src="images/facebook.svg" className="main__icon" />
          </a>
        </article>
      </div>
    </section>
  );
};

export default LoginForm;