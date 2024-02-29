import React from "react";

import {
  useAppSelector,
  useIncrementCartQuantity,
  useDecrementCartQuantity,
} from "../../hooks";

import { selectProductById } from "../../redux/slices/productsSlice";

import type { ProductType } from "../../misc/types";

import {
  Avatar,
  Button,
  IconButton,
  ListItem,
  ListItemAvatar,
  // ListItemButton,
  // ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {
  Add as IncrementIcon,
  Remove as DecrementIcon,
  DeleteForever as RemoveIcon,
} from "@mui/icons-material";

import formatCurrency from "../../utils/formatCurrency";

import QuantityButtonGroup from "./QuantityButtonGroup";

type CartListItemProps = {
  itemId: number;
  quantity: number;
};

const CartListItem = ({ itemId, quantity }: CartListItemProps) => {
  const incrementQuantity = useIncrementCartQuantity(itemId);
  const decrementQuantity = useDecrementCartQuantity(itemId);

  const itemData = useAppSelector((state) => selectProductById(state, itemId));

  if (!itemData) {
    console.log(
      `The item in your cart with ID ${itemId} was removed from inventory. Please visit our store another time.`
    );
    return null;
  }

  const {
    title: itemTitle,
    price: itemPrice,
    images: [itemImage] = [undefined],
  } = itemData;

  return (
    <ListItem alignItems="flex-start" key={`cart-item-id-${itemId}`}>
      <ListItemAvatar>
        <Avatar alt={itemTitle} src={itemImage} variant="rounded" />
      </ListItemAvatar>
      <ListItemText
        primary={`${itemTitle}`}
        secondary={
          <QuantityButtonGroup size="small">
            <Button
              variant="text"
              size="small"
              onClick={decrementQuantity}
              color="secondary"
            >
              {quantity === 1 ? (
                <RemoveIcon color="error" />
              ) : (
                <DecrementIcon />
              )}
            </Button>
            <Typography
              color="secondary.dark"
              sx={{
                lineHeight: "1",
                margin: "auto",
              }}
            >
              {quantity}
            </Typography>
            <Button
              variant="text"
              size="small"
              onClick={incrementQuantity}
              color="secondary"
            >
              <IncrementIcon />
            </Button>
          </QuantityButtonGroup>
        }
      />
      <ListItemText
        secondary={
          <React.Fragment>
            <Typography
              variant="caption"
              component="p"
              align="right"
            >{`${formatCurrency(itemPrice)}`}</Typography>
            <Typography align="right" variant="body2" color="text.primary">
              {`${formatCurrency(itemPrice * quantity)}`}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default CartListItem;
