import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from './authReducer.js'
import { types } from "./Types/types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // Obtiene el token del localStorage
    const token = localStorage.getItem("token");

    // Define el estado inicial del contexto de autenticación
    const initialState = {
        logged: false,
        token: null,
    }

    // Utiliza useReducer para manejar las acciones de autenticación con el reducer authReducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // useEffect se utiliza para verificar si hay un token almacenado y actualiza el estado si es así
    useEffect(() => {
        if (token) {
            dispatch({
                type: types.LOGIN,
                payload: {
                    logged: true,
                    token
                }
            })
        }
    }, [token, dispatch]) 

    // Función para realizar el inicio de sesión
    const login = (payload) => {
        dispatch({
            type: types.LOGIN,
            payload
        })
    }

    // Función para cerrar sesión
    const logout = () => {
        dispatch({
            type: types.LOGOUT
        })
    }

    // Función para registrar un nuevo usuario
    const register = (payload) => {
        dispatch({
            type: types.REGISTER,
            payload
        })
    }

    // Retorna el contexto de autenticación para ser utilizado por otros componentes
    return (
        <AuthContext.Provider value={{
            state,
            login,
            register,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
