import "../public/css/formulario.css";
import { Navbar } from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import safety from "../public/images/safety.png"
import drive from "../public/images/drive.png"
import guarantee from "../public/images/guarantee.png"
import formulario1 from "../public/images/formulario1.png"
import { Footer } from "../components/Footer.jsx";

export default function Formularios() {
  return (
    <section>
      <Navbar />
      <div class="grid-container">
        <div class="hero-left">
          <h1 class="hero-title-about">
            Formulario con <br /> medidas de seguridad e higiene
          </h1>
          <div class="buttons-about">
            <a class="button-about" href="/checklist">
              Seguridad
            </a>
            <a class="button-about2" href="/higiene">
              Higiene
            </a>
            <ul class="hero-info">
              <li>
              <div className="container-img">
                <img src={safety} alt="safety-img" />
              </div>
                <h4>100% Seguro</h4>
              </li>
              <li>
              <div className="container-img">
                <img src={guarantee} alt="guarante-img" />
              </div>
                <h4>Confiable</h4>
              </li>
              <li>
              <div className="container-img">
                <img src={drive} alt="drive-img" />
              </div>
                <h4>
                  Buen <br /> salvaguardado
                </h4>
              </li>
            </ul>
          </div>
        </div>
        <div class="hero-right">
          <div class="container-img">
            <img src={formulario1} alt="formulario-img" />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
