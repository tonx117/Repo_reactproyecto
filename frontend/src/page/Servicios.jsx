import { Navbar } from "../components/Navbar.jsx";
import libreria from "../public/images/libreria.png";
import trabajadores from "../public/images/trabajadores.png"

export default function Servicios() {
  return (
    <>
      <Navbar />
      <section className="section_services">
        <div className="grid-container">
          <div className="grid-columns">
            <div className="img-styleBox">
              <div className="styleBox-border">
                <img
                  className="styleBox-img1"
                  src={libreria}
                  alt="imagenwiki"
                />
              </div>
              <img
                className="styleBox-img2"
                src={trabajadores}
                alt="imagenwiki"
              />
            </div>
          </div>
          <div className="grid-columns">
            <div className="section-intro">
              <h4 className="intro-title">Acerca de</h4>
              <h3 className="wiki-title">Wiki</h3>
            </div>
            <p className="paragraph-services">
              Para profundizar en el tema crucial de la seguridad e higiene,
              hemos creado una wiki exhaustiva que abarca diversas áreas en el
              entorno empresarial. En esta wiki, encontrarás información
              detallada sobre las mejores prácticas, regulaciones, consejos y
              recursos esenciales para mantener un ambiente de trabajo seguro y
              saludable.
            </p>
            <a className="buttonwiki" href="/wiki">
              Leer más
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
