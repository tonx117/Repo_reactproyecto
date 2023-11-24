import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const LoginProtect = () => {
    // Obtiene el estado de autenticación del contexto de autenticación
    const { state } = useContext(AuthContext);
    console.log(state.logged);
    return (
        <>
            {
                // Verifica si el usuario está autenticado, si lo esta, le permite avanzar, si no, le lleva hacia nologin
                state.logged ? <Outlet /> : <Navigate to="/nologin" />
            }
        </>
    );
}
