import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from './authReducer.js'
import { types } from "./Types/types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const token = localStorage.getItem("token");

    const initialState = {
        logged: false,
        token: null,
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

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

    const login = (payload) => {
        dispatch({
            type: types.LOGIN,
            payload
        })
    }

    const logout = () => {
        dispatch({
            type: types.LOGOUT
        })
    }

    const register = (payload) => {
        dispatch({
            type: types.REGISTER,
            payload
        })
    }


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
