import "../public/css/login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import registerpic from "../public/images/registerpic.png";
import apple from "../public/images/apple.svg";
import facebook from "../public/images/facebook.svg";
import google from "../public/images/google-icon.svg";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    correo: "",
    contraseña: "", // Cambié esto de 'contraseña' a 'contraseña'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.correo === "" || user.contraseña === "") {
      // Cambié 'user.password' a 'user.contraseña'
      setError(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/usuario/login",
        {
          correo: user.correo,
          contraseña: user.contraseña, // Cambié 'password' a 'contraseña'
        }
      );

      if (response.status === 200) {
        login({ token: response.data.token });
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(true);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
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
            <a href="#" className="main__link">
              <img className="main__icon" src={google} />
            </a>

            <a href="#" className="main__link">
              <img className="main__icon" src={apple} />
            </a>

            <a href="#" className="main__link">
              <img className="main__icon" src={facebook} />
            </a>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};
