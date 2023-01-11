import React from "react";
import { Link } from "react-router-dom";
import "../Assets/css/styleNavbarAdmin.css";
import logoKeepe from "../Assets/IMG/keepelogo.png";
//import "./boton";

const NavbarKeepeAdmin = () => {
  return (
    <nav className="navbar navbar-expand-lg colorNavAdmin" id="navbar-example">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="icononav" src={logoKeepe} alt="" />
        </Link>
        <span className="iconotext">Keepe</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mx-lg-auto mx-xs-0 textoNav">
            <li className="nav-item">
              <Link to="/" className="nav-link textoNav" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/reserva"
                className="nav-link textoNav"
                aria-current="page"
              >
                Reservar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registroadmin" className="nav-link textoNav">
                Publicar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/misionyvision" className="nav-link textoNav">
                Conócenos
              </Link>
            </li>
            <li className="nav-item dropdown dropdownLi">
              <Link
                className="btn btn-circle purple-background nav-link dropdown-toggle textoNav center-icon "
                to="/"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user-plus h3"></i>
              </Link>
              <ul
                className="dropdown-menu bg-ul"
                aria-labelledby="navbarScrollingDropdown"
                onMouseEnter={(event) => {
                  event.currentTarget.previousElementSibling.classNameList.add(
                    "hover"
                  );
                }}
              >
                <li>
                  <Link className="dropdown-item iancl" to="/iniciarsesion">
                    Iniciar Sesión
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item iancl" to="/registro">
                    Registrate
                  </Link>
                </li>
                {/* <li>
                <a className="dropdown-item iancl" target="_blank" to="/">
                  Ver Tickets
                </a>
              </li>
              <li>
                <a className="dropdown-item iancl" target="_blank" to="/">
                  Mi Perfil
                </a>
              </li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarKeepeAdmin;
