import React from "react";
import "../Assets/css/styleRecintos.css";
import img1 from "../Assets/IMG/imgRecinto1.png";
import img2 from "../Assets/IMG/imgRecinto2.png";
import img3 from "../Assets/IMG/imgRecinto3.png";
import img4 from "../Assets/IMG/imgRecinto4.png";
import img5 from "../Assets/IMG/imgRecinto5.png";
import img6 from "../Assets/IMG/imgRecinto6.png";
const RecintosComponent = () => {
  return (
    <div
      id="carouselExampleControls"
      className="container-fluid carousel slide py-5 bg-carrousel"
      data-ride="carousel"
      data-interval="2000"
    >
      <div className="carousel-inner">
        <h1 className="py-4 tituloPrincipal">Recintos disponibles</h1>
        <div className="carousel-item active">
          <div className="row">
            <div className="col-12 col-lg-4 text-center">
              <img
                src={img1}
                alt="Mi imagen"
                className="img-fluid tamanio-imagen"
              />
              <h3 className="descripcionCancha py-3">
                Club Basquet -Providencia
              </h3>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <img src={img2} alt="Mi imagen" className="img-fluid" />
              <h3 className="descripcionCancha py-3">Sala Danza - Maipú</h3>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <img src={img3} alt="Mi imagen" className="img-fluid" />
              <h3 className="descripcionCancha py-3">Club Padel - Recoleta</h3>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-12 col-lg-4 text-center">
              <img src={img4} alt="Mi imagen" className="img-fluid" />
              <h3 className="descripcionCancha py-3">
                Club natación -San Bernardo
              </h3>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <img src={img5} alt="Mi imagen" className="img-fluid" />
              <h3 className="descripcionCancha py-3">
                Sala de baile - Peñalolen
              </h3>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <img src={img6} alt="Mi imagen" className="img-fluid" />
              <h3 className="descripcionCancha py-3">
                Club Tenis - Las Condes
              </h3>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default RecintosComponent;
