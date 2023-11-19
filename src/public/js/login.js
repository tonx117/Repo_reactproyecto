const loginform = document.querySelector("#formlogin");

loginform.addEventListener("submit", async (e) => {
  e.preventDefault();

  const correo = document.querySelector("#correo").value;
  const contraseña = document.querySelector("#contraseña").value;

  const response = await fetch("http://localhost:4000/api/usuario/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
    title: "Usuario logueado correctamente",
    text: "Usuario logueado correctamente",
  });

  loginform.reset();

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
