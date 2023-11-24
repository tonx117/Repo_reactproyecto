import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const LoginProtect2 = () => {
    // Obtiene el estado de autenticación del contexto de autenticación
    const { state } = useContext(AuthContext);

    return (
        <>
            {
                // Verifica si el usuario está autenticado, si lo esta, lo redirige a la ruta principal
                state.logged ? <Navigate to="/" /> : <Outlet />
            }
        </>
    );
}
