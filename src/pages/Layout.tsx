import { Outlet } from "react-router-dom";

import withUserData from "../components/common/hoc/withUserData";

import NavBar from "../components/nav/NavBar";
import Footer from "../components/common/Footer";

const NavBarWithUserData = withUserData(NavBar);

const Layout = () => {
  return (
    <>
      <NavBarWithUserData />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
