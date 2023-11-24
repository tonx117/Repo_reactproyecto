import { Navbar } from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import seguridadindus from "../public/images/seguridadindustrial.jpg"
import metalurgia from "../public/images/metalurgia2.jpg"
import herramientas from "../public/images/seguridadherramientas.png"
import electrico from "../public/images/electrico.jpg"

export default function Wiki() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="wrap">
          <div className="box">
            <div className="box-top">
              <img
                className="box-image"
                src={seguridadindus}
                alt="Imagen generales"
              />
              <div className="title-flex">
                <h3 className="box-title">Seguridad Industrial</h3>
                <p className="user-follow-info">Generales</p>
              </div>
              <p className="description">
                Información indispensable para la seguridad industrial requerida
                en todas las empresas.
              </p>
            </div>
            <Link to={"/generales"}>Leer más.</Link>
          </div>
          <div className="box">
            <div className="box-top">
              <img
                className="box-image"
                src={metalurgia}
                alt="Metalurgia"
              />
              <div className="title-flex">
                <h3 className="box-title">Seguridad en el torno</h3>
                <p className="user-follow-info">Metalurgia</p>
              </div>
              <p className="description">
                Riesgos, medidas, manejos y cuidados generales para trabajar de
                manera segura en el torno.
              </p>
            </div>
            <Link to={"/metalurgia"}>Leer más.</Link>
          </div>
          <div className="box">
            <div className="box-top">
              <img
                className="box-image"
                src={herramientas}
                alt="Herramientas"
              />
              <div className="title-flex">
                <h3 className="box-title">Seguridad con herramientas</h3>
                <p className="user-follow-info">Carpintería</p>
              </div>
              <p className="description">
                Cuidados, recomendaciones, consejos y paso a paso para la
                utilización de las herramientas de forma adecuada.
              </p>
            </div>
            <Link to={"/carpinteria"}>Leer más.</Link>
          </div>
          <div className="box">
            <div className="box-top">
              <img
                className="box-image"
                src={electrico}
                alt="electricidad"
              />
              <div className="title-flex">
                <h3 className="box-title">Seguridad con Tableros Eléctricos</h3>
                <p className="user-follow-info">Electricidad</p>
              </div>
              <p className="description">
                Riesgos, consejos, instalación y consecuencias de la energía
                eléctrica para un buen manipulamiento de la misma.
              </p>
            </div>
            <Link to={"/electricidad"}>Leer más.</Link>
          </div>
        </div>
      </section>
    </>
  );
}
