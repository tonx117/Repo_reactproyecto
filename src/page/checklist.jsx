import React from "react";

export default function Checklist() {
  return (
    <div>
      <form>
        <section>
          <br />
          <br />
          <h1>Formulario De Seguridad Institucional</h1>
          <br />
          <br />

          <h2>Medidas de Seguridad</h2>
          <br />
          <br />
        </section>
        <section>
          <h3>Instalaciones Generales</h3>
          <label>
            <input type="checkbox" className="mycheck" /> Existen salidas de
            emergencia claramente señalizadas.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Las salidas de
            emergencia están libres de obstáculos.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Las puertas de
            emergencia abren fácilmente y no están bloqueadas.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Hay un sistema de
            alarma contra incendios instalado y funcionando.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Se realizan simulacros
            de evacuación periódicamente.
          </label>
          <br />
          <h3>Prevención de Incendios</h3>
          <label>
            <input type="checkbox" className="mycheck" /> Hay extintores de
            incendios ubicados estratégicamente.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Los extintores están
            en buen estado y no están vencidos.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Existe un plan de
            respuesta ante incendios y está actualizado.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Los sistemas de
            detección de humo y alarma contra incendios funcionan correctamente.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Los enchufes y cables
            eléctricos están en buen estado y no presentan riesgos de
            cortocircuitos.
          </label>
          <br />
        </section>
        <section>
          <h3>Seguridad Física</h3>
          <label>
            <input type="checkbox" className="mycheck" /> Se cuenta con cámaras
            de seguridad en lugares estratégicos.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Los accesos están
            controlados y se utilizan tarjetas de identificación o sistemas de
            ingreso seguros.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Se realizan revisiones
            periódicas de las cerraduras y sistemas de seguridad.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Hay personal de
            seguridad capacitado y disponible en caso de emergencia.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Las áreas sensibles
            (como laboratorios o salas de cómputo) están adecuadamente
            protegidas.
          </label>
          <br />
          <h3>Primeros Auxilios</h3>
          <label>
            <input type="checkbox" className="mycheck" /> Se dispone de un
            botiquín de primeros auxilios bien equipado y accesible.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Hay personal
            capacitado en primeros auxilios y RCP.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Los profesores y
            personal están al tanto de los procedimientos de primeros auxilios.
          </label>
          <br />
        </section>
        <section>
          <h3>Otros</h3>
          <label>
            <input type="checkbox" className="mycheck" /> Se realizan
            inspecciones regulares de seguridad en las instalaciones.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Los equipos de cocina
            y calefacción están en buen estado y cumplen con las normas de
            seguridad.
          </label>
          <br />
          <label>
            <input type="checkbox" className="mycheck" /> Se realizan
            evaluaciones de riesgos y se toman medidas para mitigarlos.
          </label>
          <br />
          <br />
          <div id="botoncheck">
            <input type="button" value="Guardar" id="" />
            <input type="button" value="Imprimir" id="imprimirBtn" />
          </div>
        </section>
      </form>
      <form
        action="http://localhost:4000/api/"
        method="POST"
        encType="multipart/form-data"
        id="enviogoogle"
      >
        <input type="file" name="PDFfile" accept="application/pdf" />
        <input type="submit" value="Enviar a Google Drive" />
      </form>
    </div>
  );
}
