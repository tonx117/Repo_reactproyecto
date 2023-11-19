import { checkSchema } from "express-validator";

export const createUserSchema = checkSchema({
  correo: {
    errorMessage: "Correo inválido",
    isEmail: {
      bail: true, 
      errorMessage: "El formato del correo no es válido",
    },
  },
  contraseña: {
    isLength: {
      options: { min: 8 },
      errorMessage: "La contraseña debe tener al menos 8 caracteres",
    },
  },
});
