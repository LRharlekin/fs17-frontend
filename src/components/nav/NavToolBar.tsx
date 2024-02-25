import React from "react";

import { useNavigate } from "react-router-dom";

import { IconButton, Toolbar, Tooltip } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const NavToolBar = () => {
  const navigate = useNavigate();

  const handleAccountIconClick = (event: React.MouseEvent<HTMLElement>) => {
    // if not logged in: redirect to login page
    navigate("/login");
    // if logged in: open user menu

    setAnchorElUser(event.currentTarget);
  };

  return (
    <Toolbar component="nav">
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
      <Tooltip title="Login">
        <IconButton onClick={() => console.log("login")}>
          {/* <IconButton onClick={() => console.log("login")}> */}
          {/* navigate to login page */}
          {/* <Link to="/login">👤</Link> */}
          <AccountCircle />
        </IconButton>
      </Tooltip>

      <div>🔎 Search</div>
      <div>🛒 Cart</div>
    </Toolbar>
  );
};

export default NavToolBar;
