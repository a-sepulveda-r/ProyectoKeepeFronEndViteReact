import React from "react";
import "../Assets/css/stylePromise.css";
import promise1 from "../Assets/IMG/promise1.png";
import promise2 from "../Assets/IMG/promise2.png";
import promise3 from "../Assets/IMG/promise3.png";

const PromesasComponent = () => {
  return (
    <div className="container-fluid bg-promesas">
      <div className="container pb-5">
        <div className="row">
          <h1 className="text-center py-3 titulo-principal">Promesas</h1>
          <div className="col-12 col-lg-4 mx-auto text-center">
            <div className="container bg-redondo">
              <img
                src={promise1}
                className="img-fluid imgPromesa"
                alt="Imagen 1"
              />
            </div>
            <h3 className="text-center mt-3 titulo-imagen">Rápido</h3>
          </div>
          <div className="col-12 col-lg-4 mx-auto text-center">
            <div className="container bg-redondo">
              <img
                src={promise2}
                className="img-fluid imgPromesa"
                alt="Imagen 1"
              />
            </div>
            <h3 className="text-center mt-3 mx-auto titulo-imagen">
              Fidelización
            </h3>
          </div>
          <div className="col-12 col-lg-4 mx-auto text-center">
            <div className="container bg-redondo">
              <img
                src={promise3}
                className="img-fluid imgPromesa"
                alt="Imagen 1"
              />
            </div>
            <h3 className="text-center mt-3 titulo-imagen">Rentabilidad</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromesasComponent;
