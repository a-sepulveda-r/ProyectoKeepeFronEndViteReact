import { Outlet, useNavigation } from "react-router-dom";
import NavbarKeepe from "../components/Navbarkeepe";
import Footer from "../components/Footer";

const LayoutPublic = () => {
  // const navigation = useNavigation();
  return (
    <>
      <NavbarKeepe />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default LayoutPublic;
