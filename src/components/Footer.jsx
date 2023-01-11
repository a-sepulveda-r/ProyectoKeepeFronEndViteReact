import React from "react";
import "../assets/css/styleFooter.css";
import logoKeepe from "../assets/IMG/keepelogo.png";

const Footer = () => {
  return (
    <div id="footer" className="pd-3 pt-4">
      {/*SOCIAL MEDIA */}
      <section>
        <div
          id="social-media-footer1"
          className="container-fluid d-flex justify-content-center"
        >
          <span>
            <i className=" icon fa-brands fa-facebook"></i>
          </span>
          <span>
            <i className="icon fa-brands fa-instagram"></i>
          </span>
          <span>
            <i className="icon fa-brands fa-twitter"></i>
          </span>
        </div>
      </section>
      <hr></hr>

      {/*SOCIAL MEDIA */}
      <div className="container-fluid d-flex justify-content-center">
        <div className="row ">
          <div id="footer-seccion2" className="col-12 col-md3">
            <ul className="lista1 list-unstyled">Inicio</ul>
          </div>
          <div
            id="footer-seccion3"
            className="col-12 col-md3 d-flex aling-items-center justify-content-center"
          >
            <ul className="lista2 list-unstyled">
              Canchas Favoritas
              <li>CANCHA1</li>
              <li>CANCHA2</li>
              <li>CANCHA3</li>
            </ul>
          </div>
          <div
            id="footer-seccion4"
            className="col-12 col-md3 d-flex aling-items-center justify-content-center"
          >
            <ul className="lista3 list-unstyled">
              Contacto
              <li>Preguntas Frecuentes</li>
              <li>Keepe@gmail.com</li>
              <li>+56 9 51050072</li>
            </ul>
          </div>
          <div id="footer-seccion5" className="col-12 ">
            <ul className="lista4 list-unstyled">
              Acceso Cientes
              <li>Mis reservas</li>
              <li>Mi perfil</li>
              <li>Mis promociones</li>
            </ul>
          </div>
        </div>
      </div>
      {/*Keepe Logo*/}
      <div id="keepelogo-footer" className="container-fluid">
        <div className="row">
          <img
            src={logoKeepe}
            className="col-12 col-md3 d-flex aling-items-center justify-content-center"
          />
        </div>
      </div>
      {/*Keepe Logo*/}
      <div
        id="keepeletras"
        className="keepe-letras col-12 col-md3 d-flex aling-items-center justify-content-center"
      >
        <h1>Keepe</h1>
      </div>
      <div id="copyright" className="container">
        <div className="row">
          <div
            id="copyright-contenido"
            className="col-12 col-md3 d-flex aling-items-center justify-content-center"
          >
            <p>© 2022. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
