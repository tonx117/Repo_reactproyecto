import { Navbar } from "../components/Navbar.jsx";
import vector from "../public/images/vector.png";
import { Footer } from "../components/Footer.jsx";
import { AuthContext } from "../context/AuthProvider.jsx";
import { useContext } from "react";

export const Index = () => {
  const { state } = useContext(AuthContext);
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
                <br></br>
                {/*Si se esta logueado, se muestra el link al chat, si no, no se muestra nada*/}
                {state.logged && <a href="https://centibot.zapier.app/" className="centibot">Asistente Virtual</a>}
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
      <Footer />
    </>
  );
};
