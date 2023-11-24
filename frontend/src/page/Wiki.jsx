import { Navbar } from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer.jsx";

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
                src="images/generales.jpg"
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
                src="images/metalurgia.jpg"
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
                src="images/carpinteria.jpg"
                alt="Girl Eating Pizza"
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
                src="images/electricidad.jpg"
                alt="Girl Eating Pizza"
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
      <Footer />
    </>
  );
}
