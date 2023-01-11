import * as React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styleRegistroExitoso.css";
import keepelogo2 from "../assets/IMG/keepelogo2.png";

const RegistroExitosoComponent = () => {
  return (
    <div className="container">
      <div className="card-body border-0 mb-5">
        <h5 className="retext text-center mt-5">Registro Exitoso!</h5>
        <div className="card mx-auto border-0" style={{ width: "18rem" }}>
          <button type="button" className="btn btn-link p-0">
            <Link to="/pagoreserva" className="text-decoration-none">
              <img
                src={keepelogo2}
                className="card-img-top rounded-circle mx-auto d-block"
                alt="image"
              />
            </Link>
          </button>
          <div className="card-body text-center">
            <button className="reservabuton">
              <Link to="/pagoreserva" className="text-decoration-none">
                <h5 className="retext2 text-center">Ir a la Reserva ↑</h5>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistroExitosoComponent;
