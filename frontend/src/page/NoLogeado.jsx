import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { Link } from "react-router-dom";

export const FaltaLogueo = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Para entrar a esta sección debes estar logueado</h1><br /><br />
        <h2>Por favor, inicia sesión antes de continuar</h2><br />
        <div>
          <Link to="/account">Iniciar sesión</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
