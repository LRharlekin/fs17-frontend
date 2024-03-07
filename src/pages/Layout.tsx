import { useState } from "react";
import { Outlet } from "react-router-dom";

import { ThemeContext } from "../theme/ThemeContextProvider";
import withUserData from "../components/common/hoc/withUserData";

import NavBar from "../components/nav/NavBar";
import Footer from "../components/common/Footer";

import type { ThemeModes } from "../theme/ThemeContextProvider";

const NavBarWithUserData = withUserData(NavBar);

const Layout = () => {
  const [theme, setTheme] = useState<ThemeModes>("dark");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <NavBarWithUserData />

      <Outlet />
      <Footer />
    </ThemeContext.Provider>
  );
};

export default Layout;
