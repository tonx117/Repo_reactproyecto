import "../public/css/contacto.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nombre: "",
    Email: "",
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
      const formDataEncoded = new URLSearchParams(Object.entries(formData));

      const response = await axios.post(
        "http://localhost:4000/enviar-correo",
        formDataEncoded,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 201 || response.status === 200) {
        console.log("Correo electrónico enviado:", response.data);
        console.log("hola");
        Swal.fire({
          icon: "success",
          title: "Correo enviado correctamente",
          text: "Correo enviado correctamente",
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        console.error("Error al enviar el correo:", response.status);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <form method="post" onSubmit={handleSubmit} onChange={handleChange}>
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
                  id="Nombre"
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
                  id="Email"
                  required="obligatorio"
                  placeholder="Escribe tu Email"
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
                  id="Mensaje"
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
              <span className="obligatorio"> * </span>los campos son
              obligatorios.
            </p>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contacto;
