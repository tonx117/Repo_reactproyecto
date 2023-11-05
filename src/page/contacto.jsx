import React from "react";

export default function Contacto() {
  return (
    <div>
      <form action="/enviar-correo" method="post">
        <div className="contact_form">
          <div className="formulario">
            <h1>Formulario de contacto</h1>
            <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>

            <p>
              <label htmlFor="nombre" className="colocar_nombre">
                Nombre
                <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                name="Nombre"
                id="nombre"
                required
                placeholder="Escribe tu nombre"
              />
            </p>

            <p>
              <label htmlFor="email" className="colocar_email">
                Email <span className="obligatorio">*</span>
              </label>
              <input
                type="email"
                name="Email"
                id="email"
                required
                placeholder="Escribe tu Email"
              />
            </p>

            <p>
              <label htmlFor="telefono" className="colocar_telefono">
                Teléfono{" "}
              </label>
              <input
                type="tel"
                name="Telefono"
                id="telefono"
                placeholder="Escribe tu teléfono"
              />
            </p>

            <p>
              <label htmlFor="website" className="colocar_website">
                Sitio web{" "}
              </label>
              <input
                type="url"
                name="Website"
                id="website"
                placeholder="Escribe la URL de tu web"
              />
            </p>

            <p>
              <label htmlFor="asunto" className="colocar_asunto">
                Asunto
                <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                name="Asunto"
                id="asunto"
                required
                placeholder="Escribe un asunto"
              />
            </p>

            <p>
              <label htmlFor="mensaje" className="colocar_mensaje">
                Mensaje
                <span className="obligatorio">*</span>
              </label>
              <textarea
                name="Mensaje"
                className="texto_mensaje"
                id="mensaje"
                required
                placeholder="Deja aquí tu comentario..."
              ></textarea>
            </p>

            <button
              className="button"
              type="submit"
              name="enviar_formulario"
              id="enviar"
            >
              <p>Enviar</p>
            </button>
          </div>
          <p className="aviso">
            <span className="obligatorio"> * </span>los campos son obligatorios.
          </p>
        </div>
      </form>
    </div>
  );
}
