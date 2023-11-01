import "../public/nav.css";
import { Navbar } from "../components/Navbar.jsx";
import vector from "../public/images/vector.png";

export const Index = () => {
  return (
    <>
      <section class="wrapper">
        <div class="container">
          <div class="grid-cols-2">
            <div class="grid-item-1">
              <h1 class="main-heading">
                Bienvenidos a <span>Centinela</span>
              </h1>
              <p class="info-text">
                En nuestra página, encontrarás una amplia gama de contenido
                relacionado con la seguridad e higiene. Navega a través de
                nuestros artículos, guías, herramientas y consejos para mejorar
                tu experiencia en el laburo.
              </p>
            </div>
            <div class="grid-item-2">
              <div class="team_img_wrapper">
                <img src={vector} alt="team-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
