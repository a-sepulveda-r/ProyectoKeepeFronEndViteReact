import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarKeepeAdmin from "../components/NavbarAdmin";

const LayoutPublicAdmin = () => {
  // const navigation = useNavigation();
  return (
    <>
      <NavbarKeepeAdmin />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default LayoutPublicAdmin;
