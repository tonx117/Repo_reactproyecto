import { useState } from 'react';
import axios from 'axios';
import { Navbar } from "../components/Navbar.jsx";

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [website, setWebsite] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/enviar-correo", {
        Nombre: nombre,
        Email: email,
        Telefono: telefono,
        Website: website,
        Asunto: asunto,
        Mensaje: mensaje,
      });

      console.log(response.data);

      if (response.status !== 201 && response.status !== 200) {
        console.error("Error al enviar el correo:", response.status);
        return;
      }

      console.log("Correo electrónico enviado:", response.data);
      window.location.href = "/contacto"; // Redirección opcional después de enviar el correo
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Manejo de errores, podrías mostrar un mensaje al usuario indicando que hubo un problema
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Formulario de contacto</h1>
        <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>

        <div>
          <label>
            Nombre
            <input
              type="text"
              required
              placeholder="Escribe tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Email
            <input
              type="email"
              required
              placeholder="Escribe tu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Teléfono
            <input
              type="tel"
              placeholder="Escribe tu teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Sitio web
            <input
              type="url"
              placeholder="Escribe la URL de tu web"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Asunto
            <input
              type="text"
              required
              placeholder="Escribe un asunto"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Mensaje
            <textarea
              required
              placeholder="Deja aquí tu comentario..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;

