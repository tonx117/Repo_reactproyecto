import "../public/css/login.css";
import { Link } from "react-router-dom";
import registerpic from "../public/images/registerpic.png";
import apple from "../public/images/apple.svg";
import facebook from "../public/images/facebook.svg";
import { useLogin } from "../hooks/useLogin";
import Logingoogle from "../components/Logingoogle";

export const Login = () => {
  const { handleChange, handleSubmit, user, error } = useLogin();
  return (
    <>
      <div className="main">
        <figure className="main__figure">
          <img src={registerpic} className="main__img" />
        </figure>
        <main className="main__contact">
          <h2 className="main__title">Iniciar sesión</h2>
          <p className="main__paragraph">¡Qué bueno que estés de vuelta!</p>
          <Link to={"/"}>Volver al Inicio</Link>
          <form className="main__form" id="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="correo"
              id="correo" // Cambié 'user' a 'correo'
              className="main__input"
              placeholder="Correo electrónico"
              value={user.correo}
              onChange={handleChange}
            />
            <input
              type="password"
              name="contraseña"
              id="contraseña"
              className="main__input"
              placeholder="Contraseña"
              value={user.contraseña}
              onChange={handleChange}
            />
            <button type="submit" className="main__input main__input--send">
              Iniciar sesión
            </button>
            {error && (
              <p className="error">Error al iniciar sesión o campos vacíos</p>
            )}
          </form>

          <Link to={"/register"}>Registrate aqui</Link>

          <p className="main__paragraph">O continue con</p>

          <article className="main__social">
            <Logingoogle />

            <a href="#" className="main__link">
              <img className="main__icon" src={apple} />
            </a>

            <a href="#" className="main__link">
              <img className="main__icon" src={facebook} />
            </a>
          </article>
        </main>
      </div>
    </>
  );
};
