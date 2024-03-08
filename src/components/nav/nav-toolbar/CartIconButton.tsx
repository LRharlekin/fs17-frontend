import React, { useState } from "react";

import { useAppSelector } from "../../../hooks";
import { selectCartQuantity } from "../../cart/cartSelectors";

import { Badge, IconButton } from "@mui/material";
import { ShoppingCartOutlined as EmptyCartIcon } from "@mui/icons-material";

import NavToolTip from "./NavToolTip";
import CartDrawer from "../../cart/CartDrawer";

const CartIconButton = () => {
  const cartQuantity = useAppSelector(selectCartQuantity);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCartButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    toggleCartDrawer();
  };

  return (
    <>
      <NavToolTip title="Cart">
        <IconButton color="inherit" onClick={handleCartButtonClick}>
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
      <CartDrawer toggleFunc={toggleCartDrawer} isCartOpen={isCartOpen} />{" "}
    </>
  );
};

export default CartIconButton;
