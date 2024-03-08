import React from "react";

import { useTheme, darken } from "@mui/material/styles";

import { Box } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const CartHeader = () => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "info.light",
      }}
    >
      <ShoppingCartTwoToneIcon
        fontSize="large"
        sx={{
          mt: 4,
          mb: 3,
          color: darken(theme.palette.primary.dark, 0.4),
        }}
      />
    </Box>
  );
};

export default CartHeader;
