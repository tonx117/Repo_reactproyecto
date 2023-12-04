import { types } from "./Types/types.js";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
     
      return {
        logged: true,
      };
    case types.LOGOUT:
    
      return {
        logged: false,
      };

    case types.REGISTER:
      return {
        logged: true,
      };
    default:
    
      return state;
  }
};
