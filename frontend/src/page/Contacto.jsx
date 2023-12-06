import "../public/css/contacto.css";
import { useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

const Contacto = () => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
    Asunto: "",
    Mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/enviar-correo", formData);

      if (response.status === 200) {
        console.log("Correo electrónico enviado:", response.data);
        // Redirección opcional después de enviar el correo
        window.location.href = "/contacto";
      } else {
        console.error("Error al enviar el correo:", response.status);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Manejo de errores, podrías mostrar un mensaje al usuario indicando que hubo un problema
    }
  };

  return (
    <div>
      <Navbar />
      <form action="/enviar-correo" method="post" onSubmit={handleSubmit}>
        <div className="contact_form">
          <div className="formulario_contact">
            <h1 className="h1_contact">Formulario de contacto</h1>
            <h3 className="h3_contact">
              Escríbenos y en breve los pondremos en contacto contigo
            </h3>

            <p className="p_contact">
              <label htmlFor="nombre" className="colocar_nombre">
                Nombre
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input_form"
                type="text"
                name="Nombre"
                id="Nombre"
                required
                placeholder="Escribe tu nombre"
                onChange={handleChange}
              />
            </p>
            
            <p className="p_contact">
              <label htmlFor="email" className="colocar_email">
                Email <span className="obligatorio">*</span>
              </label>
              <input
                className="input_form"
                type="email"
                name="Email"
                id="Email"
                required
                placeholder="Escribe tu Email"
                onChange={handleChange}
              />
            </p>

            <p className="p_contact">
              <label htmlFor="telefono" className="colocar_telefono">
                Teléfono{" "}
              </label>
              <input
                className="input_form"
                type="tel"
                name="Telefono"
                id="Telefono"
                placeholder="Escribe tu teléfono (opcional)"
                onChange={handleChange}
              />
            </p>

            <p className="p_contact">
              <label htmlFor="asunto" className="colocar_asunto">
                Asunto
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input_form"
                type="text"
                name="Asunto"
                id="Asunto"
                required
                placeholder="Escribe un asunto"
                onChange={handleChange}
              />
            </p>

            <p className="p_contact">
              <label htmlFor="mensaje" className="colocar_mensaje">
                Mensaje
                <span className="obligatorio">*</span>
              </label>
              <textarea
                name="Mensaje"
                className="texto_mensaje"
                id="Mensaje"
                required
                placeholder="Deja aquí tu comentario..."
                onChange={handleChange}
              ></textarea>
            </p>

            <button className="button_contact" type="submit" name="enviar_formulario" id="enviar">
              <p className="p_contact">Enviar</p>
            </button>

            <p className="aviso">
              <span className="obligatorio"> * </span>los campos son obligatorios.
            </p>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contacto;
