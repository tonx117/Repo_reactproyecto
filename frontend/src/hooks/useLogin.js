import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    correo: "",
    contraseña: "", 
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

  return { handleChange, handleSubmit, user, error };
};

export { useLogin };
