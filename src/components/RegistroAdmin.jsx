//import "./boton";
import "../Assets/css/stylesForm.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const initiaUser = {
  fullname: "",
  correo: "",
  password: "",
  phonenumber: "",
  rut: "",
  username: "",
  rolUser: {
    id: 3,
  },
};

const RegistroAdminComponent = ({
  userAdd,
  usuarioEditado,
  setUsuarioEditado,
  userEdit,
}) => {
  const [usuario, setUsuario] = useState(initiaUser);
  const { fullname, correo, password, phonenumber, rut, username, rolUser } =
    usuario;

  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        fullname: "",
        correo: "",
        password: "",
        phonenumber: "",
        rut: "",
        username: "",
        rolUser: {
          id: 3,
        },
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
    setUsuario(changedFormValue);
  };
  return (
    <>
      <div className="container-fluid py-5 bg-form">
        <form
          id="formulario my-5 py-3 "
          className="container bg-light border-radius col-lg-6 col-12"
        >
          <h3 className="card-title">
            <br />
            <span>Registro Admin</span>
            <span id="exclamacion">!</span>
            <br />
          </h3>
          <div id="textosubtitulo" className="form-text">
            Registrarte te permite realizar reservas, pagar, ceder la reserva a
            otro, y revisar el código QR de la reserva.
          </div>
          <div className="mb-3 pb-2 pt-5 mx-3">
            <label for="exampleInputNombre" className="form-label">
              Nombre y Apellidos:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputNombre"
              placeholder="Ingrese aquí su nombre y apellidos"
              aria-describedby="nombreHelp"
              name="fullname"
              value={fullname}
              onChange={handleInputChange}
              required
            />
            <div id="nombreHelp" className="form-text">
              Nunca compartiremos sus datos con nadie.
            </div>
          </div>
          <div className="mb-3 py-2 mx-3">
            <label for="exampleInputUsername" className="form-label">
              Username:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              placeholder="Ingrese aquí su username"
              aria-describedby="usernameHelp"
              name="username"
              value={username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 py-2 mx-3 d-none">
            <label for="exampleInputUsername" className="form-label">
              id:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              placeholder="Ingrese aquí su username"
              aria-describedby="usernameHelp"
              name="rolUser"
              value={rolUser.id}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 py-2 mx-3">
            <label for="exampleInputEmail1" className="form-label">
              Email:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Ingrese aquí su email"
              aria-describedby="emailHelp"
              name="correo"
              value={correo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 py-2 mx-3">
            <label for="exampleInputRut" className="form-label">
              Rut:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputRut"
              placeholder="Ingrese aquí su rut"
              aria-describedby="rutHelp"
              name="rut"
              value={rut}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 py-2 mx-3">
            <label for="exampleInputTel" className="form-label">
              Teléfono:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputTel"
              pattern="[0-9]*"
              placeholder="Ingrese aquí su teléfono"
              aria-describedby="telHelp"
              name="phonenumber"
              value={phonenumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 py-2 mx-3">
            <label for="exampleInputPassword1" className="form-label">
              Contraseña:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingrese aquí su constraseña"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 py-2 mx-3">
            <label for="exampleInputTel" className="form-label">
              Nombre Recinto:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTel"
              pattern="[0-9]*"
              placeholder="Ingrese aquí su teléfono"
              aria-describedby="telHelp"
              name="recinto"
              //value={recinto}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 py-2 mx-3">
            <label for="exampleInputTel" className="form-label">
              Tipo Lugar:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTel"
              pattern="[0-9]*"
              placeholder="Ingrese aquí su teléfono"
              aria-describedby="telHelp"
              name="tipoRecinto"
              //value={tiporecinto}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 py-2 mx-3">
            <label for="exampleInputTel" className="form-label">
              Dirección:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTel"
              pattern="[0-9]*"
              placeholder="Ingrese aquí su teléfono"
              aria-describedby="telHelp"
              name="direccion"
              //value={direccion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 form-check py-2 mx-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="chekCampo"
            />
            <label className="form-check-label" for="exampleCheck1">
              Acepto las condiciones
            </label>
          </div>
          {usuarioEditado !== null ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => userEdit(usuario)}
            >
              Editar usuario
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-lg btn-primary w-100 py-3 mb-3 botonIngresar"
              onClick={() => userAdd(usuario)}
            >
              Registrar
            </button>
          )}
          <div className="form-text text-center">
            ¿Ya tienes cuenta?
            <Link to="FormInicio.jsx">Inicia sesión</Link>
          </div>

          {usuarioEditado !== null ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setUsuarioEditado(null)}
            >
              Cancelar
            </button>
          ) : (
            <></>
          )}
          <br />
          <button
            id="btnCargando"
            className="btn btn-secondary w-100 d-none"
            type="button"
            disabled
          >
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Cargando...
          </button>
        </form>
      </div>
      <div
        className="toast align-items-center mt-2 ms-4"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">Formulario procesado!</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
};

export default RegistroAdminComponent;
