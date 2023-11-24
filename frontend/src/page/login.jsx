import "../public/css/login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

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
      <div className="body">
        <main className="MainRL">
          <div className="form-container">
            <h1>Iniciar sesión</h1>
            <p>¡Qué bueno que estés de vuelta!</p>
            <Link to={"/"}>Volver al Inicio</Link>
            <form className="FromRL" id="login-form" onSubmit={handleSubmit}>
              <label htmlFor="correo" className="sr-only">
                Correo electrónico
              </label>
              <input
                type="text"
                name="correo"
                id="correo" // Cambié 'user' a 'correo'
                placeholder="Correo electrónico"
                value={user.correo}
                onChange={handleChange}
              />
              <label htmlFor="contraseña" className="sr-only">
                Contraseña
              </label>
              <input
                type="password"
                name="contraseña"
                id="contraseña"
                placeholder="Contraseña"
                value={user.contraseña}
                onChange={handleChange}
              />
              <button type="submit">Iniciar sesión</button>
              {error && (
                <p className="error">Error al iniciar sesión o campos vacíos</p>
              )}
            </form>
            <p>
              ¿Todavía no tenés una cuenta? -{" "}
              <Link to={"/registro"}>Regístrate</Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
