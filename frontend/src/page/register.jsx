import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const RegisterForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numerotelefono, setNumerotelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/usuario", {
        nombre,
        apellido,
        numerotelefono,
        correo,
        contraseña,
      });

      console.log(response.data);

      if (response.status !== 201 && response.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal!",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Usuario creado correctamente",
        text: "Usuario creado correctamente",
      });

      setNombre('');
      setApellido('');
      setNumerotelefono('');
      setCorreo('');
      setContraseña('');

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Manejo de errores
    }
  };
  

  return (
    
    <section className="main">
      <Navbar />
      <div className="main__contact">
        <h2 className="main__title">Bienvenido!</h2>
        <p className="main__paragraph">Porfavor ingrese los datos a continuacion</p>

        <form className="main__form" id="formregister" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            className="main__input"
            id="nombreregistro"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="text"
            placeholder="ingrese su apellido"
            className="main__input"
            required
            id="apellidoregistro"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />

          <input
            type="tel"
            placeholder="ingrese su numero de telefono"
            className="main__input"
            id="telefonoregistro"
            value={numerotelefono}
            onChange={(e) => setNumerotelefono(e.target.value)}
          />

          <input
            type="email"
            placeholder="ingrese su correo electronico"
            className="main__input"
            required
            id="correoregistro"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <input
            type="password"
            placeholder="ingrese su contraseña"
            className="main__input"
            required
            id="contraseñaregistro"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />

          <input
            type="submit"
            value="Registrarse"
            className="main__input main__input--send"
          />
        </form>
        <Link to={"/login"}>¿Ya tienes una cuenta?</Link>

        <p className="main__paragraph">O continue con</p>

        <article className="main__social">
          <a href="#" className="main__link">
            <img src="images/google-icon.svg" className="main__icon" />
          </a>

          <a href="#" className="main__link">
            <img src="images/apple.svg" className="main__icon" />
          </a>

          <a href="#" className="main__link">
            <img src="images/facebook.svg" className="main__icon" />
          </a>
        </article>
      </div>
    </section>
  );
};

export default RegisterForm;