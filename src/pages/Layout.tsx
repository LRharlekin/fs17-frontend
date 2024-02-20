import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
