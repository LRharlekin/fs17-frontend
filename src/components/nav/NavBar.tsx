import { useState, Fragment as _F } from "react";
import AppBar from "@mui/material/AppBar";

import Container from "../common/Container";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import NavLogo from "./NavLogo";
import NavToolBar from "./nav-toolbar/NavToolBar";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <_F>
      <AppBar position="sticky">
        <Container flexDirection="row">
          <HamburgerMenu />
          <NavLogo />
          <NavMenu />

          <NavToolBar />
        </Container>
      </AppBar>
    </_F>
  );
};

export default NavBar;
