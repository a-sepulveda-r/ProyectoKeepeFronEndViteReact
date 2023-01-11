import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavbarKeepeComponent,
  RegistroExitosoComponent,
  FooterComponent,
} from "../components";
//import { getAllUsers, addUser, editUser, deleteUser } from "../services/User";
import "../Assets/css/styleHome.css";

const usuario1 = [
  {
    username: "Joseph44",
    fullname: "Joestar Gonzalez",
    password: "1234ju",
    correo: "jo.jo@gmail.com",
    rut: "9864579-0",
    phonenumber: "337534687",
  },
  {
    username: "Joseph44645",
    fullname: "Manolito Hernandez",
    password: "1234ju45",
    correo: "jojojojo@gmail.com",
    rut: "19864579-0",
    phonenumber: "979534687",
  },
];
const RegistroExitosoPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  const [user, setUser] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const usuariosBD = await getAllUsers();
    setUser(usuariosBD);
  };

  const userAdd = async (usuarioAgregado) => {
    // en esta line agregamos un usuario a la db
    const usuariosBD = await addUser(usuarioAgregado);
    //aqui hacemos que la tabla se actualice
    getUsers();
  };

  const userEdit = async (usuarioEditado) => {
    const usuarioBD = await editUser(usuarioEditado);
    getUsers();
  };

  const userDelete = async (idUsuario) => {
    const usuarioBD = await deleteUser(idUsuario);
    getUsers();
  };
  return (
    <>
      <RegistroExitosoComponent />
    </>
  );
};
export default RegistroExitosoPage;
