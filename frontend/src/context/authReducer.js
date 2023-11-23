import { types } from "./Types/types.js";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                logged: true,
                token: action.payload.token
            };
        case types.LOGOUT:
            localStorage.removeItem('token');
            return {
                logged: false
            };
        case types.REGISTER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                logged: true,
                token: action.payload.token
            };
        default:
            return state;
    }
}
