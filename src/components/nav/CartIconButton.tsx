import React from "react";

import { useNavigate } from "react-router-dom";

import { Badge, IconButton } from "@mui/material";
import { ShoppingCartOutlined as EmptyCartIcon } from "@mui/icons-material";

import NavToolTip from "./NavToolTip";
import CartDrawer from "../cart/CartDrawer";

const CartIconButton = () => {
  const navigate = useNavigate();

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("/cart");
  };

  return (
    <>
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
      <CartDrawer />
    </>
  );
};

export default CartIconButton;
