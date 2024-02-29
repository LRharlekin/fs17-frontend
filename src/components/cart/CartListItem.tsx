import React from "react";

import {
  useIncrementCartQuantity,
  useDecrementCartQuantity,
} from "../../hooks";

import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {
  Add as IncrementIcon,
  Remove as DecrementIcon,
  DeleteForever as RemoveIcon,
} from "@mui/icons-material";

import QuantityButtonGroup from "./QuantityButtonGroup";

type CartListItemProps = {
  itemId: number;
  quantity: number;
};

const CartListItem = ({ itemId, quantity }: CartListItemProps) => {
  const incrementQuantity = useIncrementCartQuantity(itemId);
  const decrementQuantity = useDecrementCartQuantity(itemId);

  return (
    <ListItem key={`cart-item-id-${itemId}`} disablePadding>
      <ListItemText primary={`quantity: ${quantity}`} />

      <QuantityButtonGroup size="small">
        <IconButton size="small" onClick={decrementQuantity} color="secondary">
          {quantity === 1 ? <RemoveIcon color="error" /> : <DecrementIcon />}
        </IconButton>
        <Typography
          color="secondary.dark"
          sx={{
            lineHeight: "1",
            margin: "auto",
          }}
        >
          {quantity}
        </Typography>
        <IconButton size="small" onClick={incrementQuantity} color="secondary">
          <IncrementIcon />
        </IconButton>
      </QuantityButtonGroup>
    </ListItem>
  );
};

export default CartListItem;
