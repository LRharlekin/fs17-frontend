import { useState, Fragment } from "react";
import AppBar from "@mui/material/AppBar";

import Container from "../Container";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <Fragment>
      <AppBar position="static">
        <Container>
          {/* <NavMenu> */}
          <menu className="NavMenu">
            {/* <NavMenu.NavLink> */}
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
            <div>Link 4</div>
          </menu>
          <div>LOGO 👗</div>
          {/* <NavToolBar> */}
          <div className="NavToolBar">
            {/* CountrySelect */}
            <select>
              {/* CountrySelect.Option */}
              <option value="en">Finland (EUR)</option>
              <option value="en">Estonia (EUR)</option>
              <option value="en">Latvia (EUR)</option>
              <option value="en">Lithuania (EUR)</option>
              <option value="es">Norway (NOK)</option>
              <option value="es">Sweden (SEK)</option>
              <option value="es">Denmark (DKK)</option>
            </select>
            <div>👤 Login </div>
            <div>🔎 Search</div>
            <div>🛒 Cart</div>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
