import { useState, Fragment as _F } from "react";
import AppBar from "@mui/material/AppBar";

import Container from "../Container";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import NavLogo from "./NavLogo";
import NavToolBar from "./NavToolBar";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <_F>
      <AppBar position="static">
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
