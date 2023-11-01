import React from 'react'

export default function contacto() {
  return (
    <div> 
        <form action="/enviar-correo" method="post">
    <div class="contact_form">
      <div class="formulario">
        <h1>Formulario de contacto</h1>
        <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>

        <form action="submeter-formulario" method="post">
          <p>
            <label for="nombre" class="colocar_nombre"
              >Nombre
              <span class="obligatorio">*</span>
            </label>
            <input
              type="text"
              name="Nombre"
              id="nombre"
              required="obligatorio"
              placeholder="Escribe tu nombre"
            />
          </p>

          <p>
            <label for="email" class="colocar_email">
              Email <span class="obligatorio">*</span>
            </label>
            <input
              type="email"
              name="Email"
              id="email"
              required="obligatorio"
              placeholder="Escribe tu Email"
            />
          </p>
          

          <p>
            <label for="telefone" class="colocar_telefono">Teléfono </label>
            <input
              type="tel"
              name="Telefono"
              id="telefono"
              placeholder="Escribe tu teléfono"
            />
          </p>

          <p>
            <label for="website" class="colocar_website">Sitio web </label>
            <input
              type="url"
              name="Website"
              id="website"
              placeholder="Escribe la URL de tu web"
            />
          </p>

          <p>
            <label for="asunto" class="colocar_asunto"
              >Asunto
              <span class="obligatorio">*</span>
            </label>
            <input
              type="text"
              name="Asunto"
              id="asunto"
              required="obligatorio"
              placeholder="Escribe un asunto"
            />
          </p>

          <p>
            <label for="mensaje" class="colocar_mensaje"
              >Mensaje
              <span class="obligatorio">*</span>
            </label>
            <textarea
              name="Mensaje"
              class="texto_mensaje"
              id="mensaje"
              required="obligatorio"
              placeholder="Deja aquí tu comentario..."
            ></textarea>
          </p>

          <button class="button" type="submit" name="enviar_formulario" id="enviar">
            <p>Enviar</p>
          </button>
        </form>

          <p class="aviso">
            <span class="obligatorio"> * </span>los campos son obligatorios.
          </p>
          </form>
        </div>
  )
}
