import React from "react";

import { useIncrementCartQuantity } from "../../hooks";

import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type AddToCartButtonProps = {
  itemId: number;
};

const AddToCartButton = ({ itemId }: AddToCartButtonProps) => {
  const incrementCartQuantity = useIncrementCartQuantity(itemId);

  return (
    <Button
      data-item-id={itemId}
      onClick={incrementCartQuantity}
      variant="outlined"
      size="small"
      color="primary"
    >
      <AddShoppingCartIcon />
    </Button>
  );
};

export default AddToCartButton;
