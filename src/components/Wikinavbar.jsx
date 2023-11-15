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
          <ul class="nav_menu_list">
            <li class="nav_menu_item">
              <Link to={"/"}>
                <a href="/" class="nav_menu_link">
                  inicio
                </a>
              </Link>
            </li>
            <li class="nav_menu_item">
              <Link to={"/generales"}>
                <a href="/generales" class="nav_menu_link">
                  generales
                </a>
              </Link>
            </li>
            <li class="nav_menu_item">
              <Link to={"/metalurgia"}>
                <a href="/metalurgia" class="nav_menu_link">
                  metalurgia
                </a>
              </Link>
            </li>
            <li class="nav_menu_item">
              <Link to={"/carpinteria"}>
                <a href="/carpinteria" class="nav_menu_link">
                  carpinteria
                </a>
              </Link>
            </li>
            <li class="nav_menu_item">
              <Link to={"/electricidad"}>
                <a href="/electricidad" class="nav_menu_link">
                  electricidad
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
