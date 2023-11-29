import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    correo: "",
    contraseña: "",
  });

  const handleSweetAlert = (icon, title, text) => {
    Swal.fire({
      icon,
      title,
      text,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.correo === "" || user.contraseña === "") {
      setError(true);
      handleSweetAlert(
        "error",
        "Oops...",
        "Correo y contraseña son obligatorios"
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/usuario/login",
        {
          correo: user.correo,
          contraseña: user.contraseña,
        }
      );

      if (response.status === 200) {
        login({ token: response.data.token });
        localStorage.setItem("token", response.data.token);
        handleSweetAlert("success", "Éxito", "Inicio de sesión exitoso");

        // Espera 2 segundos antes de redirigir
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(true);
        handleSweetAlert("error", "Oops...", "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(true);
      handleSweetAlert("error", "Oops...", "Error al iniciar sesión");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return { handleChange, handleSubmit, user, error };
};

export { useLogin };
