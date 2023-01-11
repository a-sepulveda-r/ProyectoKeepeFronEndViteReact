import React from "react";
import "../Assets/css/styleQueHacemos.css";
import mensaje from "../Assets/IMG/mensaje.png";

const ComoAyudamosComponent = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-start">
        <div className="col-lg-8 col-12">
          <h3 className="texto-info-comoayudamos py-3 ">
            <strong className="">¿Cómo te ayudamos?</strong>
          </h3>
          <h4>
            <strong className="">
              Una plataforma especializada que une tanto complejos deportivos,
              salas de estudio, salas de baile y mucho más{" "}
            </strong>
          </h4>
          <h5 className="texto-col-izquierda mx-auto">
            Entregamos un completo sistema de gestión y administración a los
            propietarios de salas de ensayo,recintos deportivos y ayudamos a
            nuestros usuarios a que entren en el sistema y prefieran tu lugar
            como primera opción
          </h5>
        </div>
        <div className="col-lg-4">
          <div className="icono-mensaje">
            <img src={mensaje} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComoAyudamosComponent;
