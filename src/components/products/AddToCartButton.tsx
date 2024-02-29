import React from "react";

import { useAppDispatch } from "../../hooks";
import { incrementCartQuantity } from "../../redux/slices/cartSlice";

import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type AddToCartButtonProps = {
  itemId: number;
};

const AddToCartButton = ({ itemId }: AddToCartButtonProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.getAttribute("data-item-id"));
    dispatch(incrementCartQuantity(id));
  };

  return (
    <Button
      data-item-id={itemId}
      onClick={handleAddToCartClick}
      variant="outlined"
      size="small"
      color="primary"
    >
      <AddShoppingCartIcon />
    </Button>
  );
};

export default AddToCartButton;
