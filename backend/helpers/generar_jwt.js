import jwt from "jsonwebtoken";

const generarJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "365d",
      },
      (err, token) => {
        if (err) {
          console.error(err);
          reject("No se pudo generar el JWT");
        } else {
          resolve(token); // Solo resuelve el token, no es necesario envolverlo en un objeto
        }
      }
    );
  });
};

export { generarJWT };
