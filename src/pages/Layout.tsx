import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

// import ThemeContext from "../theme/ThemeContext";
import ThemeProvider from "../theme/MuiThemeProvider";

import withUserData from "../components/common/hoc/withUserData";

import NavBar from "../components/nav/NavBar";
import Footer from "../components/common/Footer";

// import type { ThemeModes } from "../theme/ThemeContext";

const NavBarWithUserData = withUserData(NavBar);

type LayoutProps = {
  children?: ReactNode | ReactNode[];
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  // const [theme, setTheme] = useState<ThemeModes>("light");

  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    <ThemeProvider>
      <NavBarWithUserData />

      <Outlet />
      <Footer />
    </ThemeProvider>
    // </ThemeContext.Provider>
  );
};

export default Layout;
