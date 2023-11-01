export const Navbar = () => {
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
              <a href="/" className="nav_menu_link">
                Inicio
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="/cuenta" className="nav_menu_link">
                cuenta
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="/acercade" className="nav_menu_link">
                formularios
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="/servicios" className="nav_menu_link">
                servicios
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="/contacto" className="nav_menu_link">
                contacto
              </a>
            </li>
          </ul>
        </div>
        <button className="toggle_btn" id="toggle_btn">
          <i className="ri-menu-line"></i>
        </button>
      </nav>
    </header>
  );
};
