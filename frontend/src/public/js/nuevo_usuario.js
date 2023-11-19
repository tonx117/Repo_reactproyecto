const registerform = document.querySelector("#formregister");

registerform.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombreregistro").value;
  const apellido = document.querySelector("#apellidoregistro").value;
  const numerotelefono = document.querySelector("#telefonoregistro").value;
  const correo = document.querySelector("#correoregistro").value;
  const contraseña = document.querySelector("#contraseñaregistro").value;

  const response = await fetch("http://localhost:4000/api/usuario ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      apellido,
      numerotelefono,
      correo,
      contraseña,
    }),
  });

  const data = await response.json();

  console.log(data);

  if (response.status !== 201 && response.status !== 200) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    return;
  }

  swal.fire({
    icon: "success",
    title: "Usuario creado correctamente",
    text: "Usuario creado correctamente",
  });

  registerform.reset();

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
