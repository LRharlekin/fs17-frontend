import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Badge, Button, IconButton, Toolbar, Tooltip } from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart as FullCartIcon,
  ShoppingCartOutlined as EmptyCartIcon,
} from "@mui/icons-material";

// import CountrySelect from "./CountrySelect";
import InteractiveUserIcon from "./InteractiveUserIcon";

const NavToolBar = () => {
  const navigate = useNavigate();

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("/cart");
  };

  return (
    <Toolbar component="nav" sx={{ flexGrow: 0 }}>
      {/* CountrySelect */}
      {/* <CountrySelect /> */}
      {/* Account, Search, Cart, UserMenu */}
      <InteractiveUserIcon />
      <Tooltip title="Search">
        <IconButton color="inherit" onClick={() => console.log("search")}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Cart">
        <IconButton color="inherit" onClick={handleCartClick}>
          <Badge
            badgeContent={0}
            color="secondary"
            showZero
            max={99}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <EmptyCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default NavToolBar;
