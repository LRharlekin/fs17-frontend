import React from "react";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { selectCartQuantity } from "../../redux/slices/cartSlice";

import { Badge, IconButton } from "@mui/material";
import { ShoppingCartOutlined as EmptyCartIcon } from "@mui/icons-material";

import NavToolTip from "./NavToolTip";
import CartDrawer from "../cart/CartDrawer";

const CartIconButton = () => {
  const navigate = useNavigate();
  const cartQuantity = useAppSelector(selectCartQuantity);

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate("/cart");
  };

  return (
    <>
      <NavToolTip title="Cart">
        <IconButton color="inherit" onClick={handleCartClick}>
          <Badge
            badgeContent={cartQuantity}
            color="secondary"
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
