import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const LoginProtect = () => {
    const {state} = useContext (AuthContext);
    return (
        <>
            {
                state.logged ? <Outlet /> : <Navigate to="/account" />
            }
        </>
    );
}