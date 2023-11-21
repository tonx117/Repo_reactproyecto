import "../public/nav.css";
import { Navbar } from "../components/Navbar.jsx";
import vector from "../public/images/vector.png";

export const Index = () => {
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                Bienvenidos a <span>Centinela</span>
              </h1>
              <p className="info-text">
                En nuestra página, encontrarás una amplia gama de contenido
                relacionado con la seguridad e higiene. Navega a través de
                nuestros artículos, guías, herramientas y consejos para mejorar
                tu experiencia en el trabajo.
              </p>
            </div>
            <div className="grid-item-2">
              <div className="team_img_wrapper">
                <img src={vector} alt="team-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
