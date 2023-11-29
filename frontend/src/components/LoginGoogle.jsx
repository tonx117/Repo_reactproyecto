import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { obtenerInformacionUsuario } from "../utils/getuserinfo.js";
import google from "../public/images/google-icon.svg";
import axios from "axios";

export default function Logingoogle() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userinfo = await obtenerInformacionUsuario(
        tokenResponse.access_token
      );
      console.log(userinfo);

      if (!userinfo) return;

      const response = await axios.post(
        "http://localhost:4000/api/usuario/google",
        {
          nombre: userinfo.given_name,
          apellido: userinfo.family_name || "OMAIGA",
          correo: userinfo.email,
        }
      );
      console.log(response.data);
    },
  });

  return (
    <button className="main__link" onClick={login}>
      <img className="main__icon" src={google} />
    </button>
  );
}
