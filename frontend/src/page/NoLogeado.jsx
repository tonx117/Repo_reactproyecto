import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import nologueado from "../public/images/nologueado.svg";
import "../public/css/nologueado.css";

export const FaltaLogueo = () => {
  return (
    <>
      <Navbar />
      <div className="nologueadodiv">
        <h1 className="nologueadoh1">
          Para entrar a esta sección debes estar logueado
        </h1>
        <br />
        <br />
        <h2 className="nologueadoh2">
          Por favor, inicia sesión antes de continuar
        </h2>
        <br />
        <img className="nologueadoimagen" src={nologueado} alt="" />
        <div>
          <Link className="nologueadolink" to="/register">
            Iniciar sesión
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
