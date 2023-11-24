import "../public/css/style.css";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import registro from "../public/images/1.jpeg"
import ingreso from "../public/images/2.jpeg"
import perfil from "../public/images/perfil.png"

export default function Cuenta() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="hero_content">
          <h1 className="hero_title">Cuenta</h1>
          <div className="wrap_cuenta">
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src={registro}
                  alt="Imagen Register"
                />
                <div className="title-flex">
                  <h3 className="box-title">Registro</h3>
                  <p className="user-follow-info">
                    Guardar tus datos en la página
                  </p>
                </div>
              </div>
              <Link to={"/register"}>register</Link>
            </div>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src={ingreso}
                  alt="Imagen login"
                />
                <div className="title-flex">
                  <h3 className="box-title">Ingreso</h3>
                  <p className="user-follow-info">
                    Ingresar a través de tu cuenta
                  </p>
                </div>
              </div>
              <Link to={"/login"}>Ingresar</Link>
            </div>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src={perfil}
                  alt="Imagen perfil"
                />
                <div className="title-flex">
                  <h3 className="box-title">Perfil</h3>
                  <p className="user-follow-info">Información acerca de ti</p>
                </div>
              </div>
              <Link to={"/Perfil"}>Perfil</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
