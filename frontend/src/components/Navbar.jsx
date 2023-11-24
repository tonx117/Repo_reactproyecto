import "../public/css/nav.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthProvider";
import { CierreSesion } from "./CierreSesion";

export const Navbar = () => {
  const {state} = useContext(AuthContext)
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
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="nav_menu_item">
            {state.logged ? <CierreSesion/> : <Link to={"/account"}>cuenta</Link>}
            </li>
            <li className="nav_menu_item">
              <Link to={"/formularios"}>formularios</Link>
            </li>
            <li className="nav_menu_item">
              <Link to={"/servicios"}>servicios</Link>
            </li>
            <li className="nav_menu_item">
              <Link to={"/contacto"}>contacto</Link>
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
