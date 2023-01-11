import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import LayoutPublicAdmin from "../layout/LayoutPublicAdmin";
import Home from "../pages/Home";
import InicioSesion from "../pages/InicioUsuario";
import MisionVision from "../pages/MisionVisionPage";
import NotFound from "../pages/NotFound";
import PagoReserva from "../pages/PagoReserva";
import RegistroAdmin from "../pages/RegistroAdminPage";
import RegistroExitoso from "../pages/RegistroExitosoPage";
import Registro from "../pages/RegistroUsuario";
import Reserve from "../pages/ReservePage";
import TicketReserva from "../pages/TicketReserva";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/reserva",
            element: <Reserve />,
          },
          {
            path: "iniciarsesion",
            element: <InicioSesion />,
          },
          {
            path: "registro",
            element: <Registro />,
          },
          {
            path: "pagoreserva",
            element: <PagoReserva />,
          },
          {
            path: "misionyvision",
            element: <MisionVision />,
          },
          {
            path: "registroexitoso",
            element: <RegistroExitoso />,
          },
          {
            path: "ticket",
            element: <TicketReserva />,
          },
        ],
      },
    ],
  },
  {
    path: "/publicar",
    element: <LayoutPublicAdmin />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <RegistroAdmin />,
          },
        ],
      },
    ],
  },
]);
