import * as React from "react";
import { Link } from "react-router-dom";
import "../Assets/css/stylesCardReserva.css";

export default function BootCard() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button className="raquiImagen1 w-100" href="#">
            <Link to="/iniciarsesion" className="ancla-style">
              <h1 className="raquiTextoImagen">
                Club de Basketball "Dragones" - Santiago
              </h1>
            </Link>
          </button>
          <button className="raquiBoton w-100" to="/iniciarsesion">
            <Link to="/iniciarsesion" className="ancla-style">
              <h1 className="raqui">Reserva aquí</h1>
            </Link>
          </button>
        </div>

        <div className="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button className="raquiImagen2 w-100" to="#">
            <Link to="/iniciarsesion" className="ancla-style">
              <h1 className="raquiTextoImagen">
                Club de Tenis "Las Raquetas" - Las Condes
              </h1>
            </Link>
          </button>
          <button className="raquiBoton w-100" to="#">
            <Link to="/iniciarsesion" className="ancla-style">
              <h1 className="raqui">Reserva aquí</h1>
            </Link>
          </button>
        </div>

        <div className="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button className="raquiImagen3 w-100" to="#">
            <Link to="/iniciarsesion" className="ancla-style">
              <h1 className="raquiTextoImagen">
                Club de Natación "Delfines" - San Bernardo
              </h1>
            </Link>
          </button>
          <button className="raquiBoton w-100" to="#">
            <Link to="/iniciarsesion" className="ancla-style">
              <h1 className="raqui">Reserva aquí</h1>
            </Link>
          </button>
        </div>

        <div className="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button className="raquiImagen4 w-100" href="#">
            <Link href="/iniciarsesion" className="ancla-style">
              <h1 className="raquiTextoImagen">
                Club de baile "Ritmo latino" - Renca
              </h1>
            </Link>
          </button>
          <button className="raquiBoton w-100" href="#">
            <Link href="/iniciarsesion" className="ancla-style">
              <h1 className="raqui">Reserva aquí</h1>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
