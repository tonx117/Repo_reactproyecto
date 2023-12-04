import React, { useContext, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { obtenerInformacionUsuario } from "../utils/getuserinfo.js";
import google from "../public/images/google-icon.svg";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider"; // Importa tu contexto aquí

export default function Logingoogle() {
  const { login, register } = useContext(AuthContext); // Obtén las funciones login y register del contexto
  const handleSweetAlert = (icon, title, text) => {
    Swal.fire({
      icon,
      title,
      text,
    });
  };

  const onSuccessCallback = async (tokenResponse) => {
    const userinfo = await obtenerInformacionUsuario(
      tokenResponse.access_token
    );

    if (!userinfo) return;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/usuario/google",
        {
          nombre: userinfo.given_name,
          apellido: userinfo.family_name || "OMAIGA",
          correo: userinfo.email,
        }
      );

      console.log(response.data);

      if (response.status === 200) {
        // Comprueba si ya existe un token, si no, se trata de un nuevo registro
        if (!localStorage.getItem("token")) {
          register({ token: response.data.token }); // Cambia el estado a logged
          handleSweetAlert("success", "Éxito", "Usuario creado correctamente");

          // Espera 2 segundos antes de redirigir
          setTimeout(() => {
            window.location.href = "/"; // Cambia la URL de redirección según tus necesidades
          }, 2000);
        } else {
          // Ya existe un token, es un inicio de sesión
          login({ token: response.data.token }); // Cambia el estado a logged
          handleSweetAlert("success", "Éxito", "Inicio de sesión exitoso");

          // Espera 2 segundos antes de redirigir
          setTimeout(() => {
            window.location.href = "/"; // Cambia la URL de redirección según tus necesidades
          }, 2000);
        }
      } else {
        handleSweetAlert("error", "Oops...", "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      handleSweetAlert("error", "Oops...", "Error al iniciar sesión");
    }
  };

  const Login = useGoogleLogin({
    onSuccess: onSuccessCallback,
  });

  return (
    <button className="main__link" onClick={Login}>
      <img className="main__icon" src={google} alt="Google Icon" />
    </button>
  );
}
