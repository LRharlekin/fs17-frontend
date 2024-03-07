import React from "react";

import { useAppSelector } from "../../hooks";

import { selectPricesByIds } from "../collection/productsSlice";

import { Box, Typography } from "@mui/material";

import formatCurrency from "../../utils/formatCurrency";

type CartListFooterProps = {
  cartItems: { id: number; quantity: number }[];
};

const CartListFooter = ({ cartItems }: CartListFooterProps) => {
  const cartItemPrices: Map<number, number> = useAppSelector((state) =>
    selectPricesByIds(
      state,
      cartItems.map(({ id }) => id)
    )
  ) as ReturnType<typeof selectPricesByIds>;

  const subtotal = cartItems.reduce((acc, { id, quantity }) => {
    const price = cartItemPrices.get(id);
    return price ? acc + price * quantity : acc;
  }, 0);

  return (
    <Box p={2}>
      <Typography align="right" variant="body2" color="primary.light">
        Subtotal
      </Typography>
      <Typography
        variant="body2"
        align="right"
        sx={{
          color: "primary.main",
          fontSize: "1.5rem",
          fontWeight: 700,
        }}
      >{`${formatCurrency(subtotal)}`}</Typography>
    </Box>
  );
};

export default CartListFooter;
