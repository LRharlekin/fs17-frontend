import React, { useState } from "react";

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
  const [isCartOpen, setIsCartOpen] = useState(false); // Add state variable

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen); // Toggle the open state
  };

  const handleCartButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    // setIsCartOpen(!isCartOpen); // Toggle the open state
    // navigate("/cart");
    toggleCartDrawer(); // Call the toggle function
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
      {/* Pass the open state to the CartDrawer component */}
    </>
  );
};

export default CartIconButton;
