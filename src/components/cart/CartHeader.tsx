import React from "react";

import { useTheme, darken } from "@mui/material/styles";

import { Box, Typography } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const CartHeader = () => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        mt: 4,
        mb: 3,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ShoppingCartTwoToneIcon
        fontSize="large"
        sx={{
          color: darken(theme.palette.primary.dark, 0.4),
        }}
      />
    </Box>
  );
};

export default CartHeader;
