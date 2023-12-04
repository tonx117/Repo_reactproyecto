export const obtenerInformacionUsuario = async (accessToken) => {
  // URL de la API de perfil de Google
  const url = "https://www.googleapis.com/oauth2/v1/userinfo";

  // Configuración de la solicitud
  const opciones = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    // Realizar la solicitud a la API de Google
    const respuesta = await fetch(url, opciones);

    // Verificar si la solicitud fue exitosa
    if (respuesta.ok) {
      // Parsear la respuesta JSON
      const datosUsuario = await respuesta.json();
      return datosUsuario;
    } else {
      // Manejar errores
      console.error(
        `Error al obtener información del usuario: ${respuesta.status}`
      );
      return null;
    }
  } catch (error) {
    // Manejar errores de red u otros
    console.error("Error de red:", error);
    return null;
  }
};
