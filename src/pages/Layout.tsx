import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import ThemeProvider from "../theme/MuiThemeProvider";

import withUserData from "../components/common/hoc/withUserData";

import NavBar from "../components/nav/NavBar";
import Footer from "../components/common/Footer";

const NavBarWithUserData = withUserData(NavBar);

type LayoutProps = {
  children?: ReactNode | ReactNode[];
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <NavBarWithUserData />

      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
