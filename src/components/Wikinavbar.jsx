import "../public/nav.css";
import { Link } from "react-router-dom";

export const Wikinavbar = () => {
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
          <ul class="nav_menu_list">
            <li class="nav_menu_item">
              <Link to={"/"}>inicio</Link>
            </li>
            <li class="nav_menu_item">
              <Link to={"/generales"}>generales</Link>
            </li>
            <li class="nav_menu_item">
              <Link to={"/metalurgia"}>metalurgia</Link>
            </li>
            <li class="nav_menu_item">
              <Link to={"/carpinteria"}>carpinteria</Link>
            </li>
            <li class="nav_menu_item">
              <Link to={"/electricidad"}>electricidad</Link>
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
