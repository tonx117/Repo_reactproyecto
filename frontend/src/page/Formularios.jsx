import "../public/css/formulario.css";
import { Navbar } from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
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
                <img src="images/safety.png" alt="" />
                <h4>100% Seguro</h4>
              </li>
              <li>
                <img src="images/guarantee.png" alt="" />
                <h4>Confiable</h4>
              </li>
              <li>
                <img src="images/drive.png" alt="" />
                <h4>
                  Buen <br /> salvaguardado
                </h4>
              </li>
            </ul>
          </div>
        </div>
        <div class="hero-right">
          <div class="owl-nav disabled">
            <img src="images/formulario1.png" alt="" class="img-about" />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
