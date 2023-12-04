import { Navbar } from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import seguridadindus from "../public/images/seguridadindustrial.jpg";
import metalurgia from "../public/images/metalurgia2.jpg";
import herramientas from "../public/images/seguridadherramientas.png";
import electrico from "../public/images/electrico.jpg";
import { Footer } from "../components/Footer.jsx";

export default function () {
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
            <Link className="button-about" to={"/generales"}>
              Leer más.
            </Link>
          </div>
          <div className="box">
            <div className="box-top">
              <img className="box-image" src={metalurgia} alt="Metalurgia" />
              <div className="title-flex">
                <h3 className="box-title">Seg. en torno</h3>
                <p className="user-follow-info">Metalurgia</p>
              </div>
              <p className="description">
                Riesgos, medidas, manejos y cuidados generales para trabajar de
                manera segura en el torno.
              </p>
            </div>
            <Link className="button-about" to={"/metalurgia"}>
              Leer más.
            </Link>
          </div>
          <div className="box">
            <div className="box-top">
              <img
                className="box-image"
                src={herramientas}
                alt="Herramientas"
              />
              <div className="title-flex">
                <h3 className="box-title"> herramientas</h3>
                <p className="user-follow-info">Carpintería</p>
              </div>
              <p className="description">
                Cuidados, recomendaciones y <br />consejos para la utilización de las
                herramientas.
                
              </p>
            </div>
            <Link className="button-about" to={"/carpinteria"}>
              Leer más.
            </Link>
          </div>
          <div className="box">
            <div className="box-top">
              <img className="box-image" src={electrico} alt="electricidad" />
              <div className="title-flex">
                <h3 className="box-title">Tableros Eléctricos</h3>
                <p className="user-follow-info">Electricidad</p>
              </div>
              <p className="description">
                Manejo seguro de la energía eléctrica: riesgos, consejos,
                instalación y consecuencias.
              </p>
            </div>
            <Link className="button-about" to={"/electricidad"}>
              Leer más.
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
