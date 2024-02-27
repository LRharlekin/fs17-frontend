import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Badge, IconButton, Toolbar } from "@mui/material";
import {
  ShoppingCart as FullCartIcon,
  ShoppingCartOutlined as EmptyCartIcon,
} from "@mui/icons-material";

import UserIconButton from "./UserIconButton";
import SearchIconButton from "./SearchIconButton";
import NavToolTip from "./NavToolTip";

const NavToolBar = () => {
  const navigate = useNavigate();

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("/cart");
  };

  return (
    <Toolbar component="nav" sx={{ flexGrow: 0 }}>
      <UserIconButton />
      <SearchIconButton />
      <NavToolTip title="Cart">
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
      </NavToolTip>
    </Toolbar>
  );
};

export default NavToolBar;
