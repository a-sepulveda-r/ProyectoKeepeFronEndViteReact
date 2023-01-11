import React from "react";
import "../assets/css/styleQueHacemos.css";

const QuehacemosComponent = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-12 text-center">
          <i className="icon-quehacemos fa-solid fa-handshake-simple"></i>
        </div>

        <div className="col-lg-6 col-12">
          <h1 className="texto-info-quehacemos py-3 ">
            <strong className="">¿Qué hacemos?</strong>
          </h1>
          <h5 className="texto-col-derecha mx-auto">
            Te ayudamos a poder reservar tu lugar favorito al instante. Explora
            las múltiples opciones que tenemos para ofrecerte.
          </h5>
        </div>
      </div>
    </div>
  );
};
export default QuehacemosComponent;
