import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import "../public/nav.css";
import "../public/style.css";
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
                  src="images/1.jpeg"
                  alt="Imagen Register"
                />
                <div className="title-flex">
                  <h3 className="box-title">Registro</h3>
                  <p className="user-follow-info">Guardar tus datos en la página</p>
                </div>
              </div>
              <Link to={"/register"}>register</Link>
            </div>
            <div className="box">
              <div className="box-top">
                <img className="box-image" src="images/2.jpeg" alt="Imagen login" />
                <div className="title-flex">
                  <h3 className="box-title">Ingreso</h3>
                  <p className="user-follow-info">Ingresar a través de tu cuenta</p>
                </div>
              </div>
              <Link to={"/login"}>Ingresar</Link>
            </div>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="images/perfil.png"
                  alt="Imagen perfil"
                />
                <div className="title-flex">
                  <h3 className="box-title">Perfil</h3>
                  <p className="user-follow-info">Información acerca de ti</p>
                </div>
              </div>
              <a href="#" className="button">
                Ver perfil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
