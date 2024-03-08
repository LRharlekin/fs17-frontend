import React, { useState, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import ThemeContext from "../theme/ThemeContext";
import withUserData from "../components/common/hoc/withUserData";

import NavBar from "../components/nav/NavBar";
import Footer from "../components/common/Footer";

import type { ThemeModes } from "../theme/ThemeContext";

const NavBarWithUserData = withUserData(NavBar);

type LayoutProps = {
  children?: ReactNode | ReactNode[];
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<ThemeModes>("light");
  // const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavBarWithUserData />

      <Outlet />
      <Footer />
    </ThemeContext.Provider>
  );
};

export default Layout;
