import React from "react";
import "../Assets/css/styleCarruselMain.css";
import imgRecinto5 from "../Assets/IMG/imgRecinto5.jpg";
import imgRecinto8 from "../Assets/IMG/imgRecinto8.jpg";
import imgRecinto9 from "../Assets/IMG/imgRecinto9.jpg";
import logoCampana from "../Assets/IMG/logoCampana.png";
import logoUsuario from "../Assets/IMG/logoUsuario.png";

const CarruselAdminComponent = () => {
  return (
    <div
      id="maincarrusel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel carousel-inner">
        <div className="carousel-item active">
          <img
            src={imgRecinto5}
            className="d-block w-100"
            alt="imagenrecinto5"
          />
        </div>
        <div className="carousel-item">
          <img
            src={imgRecinto9}
            className="d-block w-100"
            alt="imagenrecinto9"
          />
        </div>
        <div className="carousel-item">
          <img
            src={imgRecinto8}
            className="d-block w-100"
            alt="imagenrecinto8"
          />
        </div>
        <div className="overlay">
          <div className="container text-center">
            <div className="row px-2">
              <div className="col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                <h1 className="titulo1">
                  TU{" "}
                  <span className="img-logo">
                    <img src={logoCampana} alt="logo campana" />
                  </span>{" "}
                </h1>
                <div className="col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                  <h1 className="titulo2">PUBLICACIÓN</h1>
                </div>
                <div className="col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                  <h1 className="titulo3">PERFECTA</h1>
                </div>
                <p className="texto-info col-sm-12 col-12 ">
                  Con <strong>Keepe</strong> podrás publicar tu recinto{" "}
                  <strong>FAVORITO</strong>
                </p>
                <p className="texto-info2 col-sm-12 col-12 ">
                  en donde quieras y administrar tus reservas.
                </p>
                <button className="boton-reservar" type="btn">
                  <span className="boton-reservar-texto">Publica aquí</span>
                </button>
              </div>
              <div className="container col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                <div className="row">
                  <button className="boton-admin" type="btn">
                    <span>
                      <img src={logoUsuario} alt="logo usuario" />
                    </span>
                    <span className="boton-admin-texto">
                      Soy Administrador o propietario de un recinto, necesito
                      información para unirme a <strong>Keepe</strong>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarruselAdminComponent;
