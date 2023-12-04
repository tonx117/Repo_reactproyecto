import { types } from "./Types/types.js";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      // Al realizar un inicio de sesión, se establece el token en el localStorage
      localStorage.setItem("token", action.payload.token);
      // Retorna un nuevo estado con el usuario autenticado y el token almacenado
      return {
        ...state,
        logged: true,
        token: action.payload.token,
      };
    case types.LOGOUT:
      // Cuando se hace logout, se elimina el token del localStorage
      localStorage.removeItem("token");
      // Retorna un nuevo estado con el usuario desautenticado
      return {
        logged: false,
      };

    case types.REGISTER:
      // Al registrar un nuevo usuario, se establece el token en el localStorage
      localStorage.setItem("token", action.payload.token);
      // Retorna un nuevo estado con el usuario registrado y el token almacenado
      return {
        ...state,
        logged: true,
        token: action.payload.token,
      };
    default:
      // Si la acción no corresponde a ninguno de los tipos definidos, se devuelve el estado actual
      return state;
  }
};
