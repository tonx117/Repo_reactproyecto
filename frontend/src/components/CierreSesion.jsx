import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

export const CierreSesion = () => {
    const { logout } = useContext(AuthContext);
    const cerrarSesion = () => { 
        logout();
        localStorage.removeItem('token');
    }
  return (
    <button onClick={cerrarSesion}> Cerrar Sesion</button>
  )
}
