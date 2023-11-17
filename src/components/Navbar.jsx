import "../public/nav.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const Menu = () => {
    const navId = document.getElementById("nav_menu"),
      ToggleBtnId = document.getElementById("toggle_btn"),
      CloseBtnId = document.getElementById("close_btn");

    ToggleBtnId.addEventListener("click", () => {
      navId.classList.add("show");
    });

    CloseBtnId.addEventListener("click", () => {
      navId.classList.remove("show");
    });
  };

  return (
    <header className="container header">
      <nav className="nav">
        <div className="logo">
          <h2>Centinela</h2>
        </div>
        <div className="nav_menu" id="nav_menu">
          <button className="close_btn" id="close_btn">
            <i className="ri-close-fill"></i>
          </button>
          <ul className="nav_menu_list">
            <li className="nav_menu_item">
              <Link to={"/"}>
                <a href="/" className="nav_menu_link">
                  Inicio
                </a>
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link to={"/account"}>
                <a href="/cuenta" className="nav_menu_link">
                  cuenta
                </a>
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link to={"/formularios"}>
                <a href="/formularios" className="nav_menu_link">
                  formularios
                </a>
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link to={"/servicios"}>
                <a href="/servicios" className="nav_menu_link">
                  servicios
                </a>
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link to={"/contact"}>
                <a href="/contacto" className="nav_menu_link">
                  contacto
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <button className="toggle_btn" id="toggle_btn" onClick={Menu}>
          <i className="ri-menu-line"></i>
        </button>
      </nav>
    </header>
  );
};