import "../public/css/contacto.css";
import { useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [website, setWebsite] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

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
      <form action="/enviar-correo" method="post">
        <div className="contact_form">
          <div className="formulario_contact">
            <h1 className="h1_contact">Formulario de contacto</h1>
            <h3 className="h3_contact">
              Escríbenos y en breve los pondremos en contacto contigo
            </h3>

            <form action="submeter-formulario" method="post">
              <p className="p_contact">
                <label htmlFor="nombre" className="colocar_nombre">
                  Nombre
                  <span className="obligatorio">*</span>
                </label>
                <input
                  className="input_form"
                  type="text"
                  name="Nombre"
                  id="nombre"
                  required="obligatorio"
                  placeholder="Escribe tu nombre"
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
                  id="email"
                  required="obligatorio"
                  placeholder="Escribe tu Email"
                />
              </p>

              <p className="p_contact">
                <label htmlFor="telefone" className="colocar_telefono">
                  Teléfono{" "}
                </label>
                <input
                  className="input_form"
                  type="tel"
                  name="Telefono"
                  id="telefono"
                  placeholder="Escribe tu teléfono"
                />
              </p>

              <p className="p_contact">
                <label htmlFor="website" className="colocar_website">
                  Sitio web{" "}
                </label>
                <input
                  className="input_form"
                  type="url"
                  name="Website"
                  id="website"
                  placeholder="Escribe la URL de tu web"
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
                  id="asunto"
                  required="obligatorio"
                  placeholder="Escribe un asunto"
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
                  id="mensaje"
                  required="obligatorio"
                  placeholder="Deja aquí tu comentario..."
                ></textarea>
              </p>

              <button
                className="button_contact"
                type="submit"
                name="enviar_formulario"
                id="enviar"
                onClick={handleSubmit}
              >
                <p className="p_contact">Enviar</p>
              </button>
            </form>

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
