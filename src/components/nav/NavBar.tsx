import AppBar from "@mui/material/AppBar";

import Container from "../common/Container";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import NavLogo from "./NavLogo";
import NavToolBar from "./nav-toolbar/NavToolBar";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Container flexDirection="row">
        <HamburgerMenu />
        <NavLogo />
        <NavMenu />

        <NavToolBar />
      </Container>
    </AppBar>
  );
};

export default NavBar;
