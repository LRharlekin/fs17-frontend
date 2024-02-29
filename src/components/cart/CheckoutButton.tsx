import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CheckoutButton = () => {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "info.light",
        // position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Button
        sx={{
          m: 2,
          width: "calc(100% - 2rem)",
        }}
        variant="contained"
        endIcon={<ArrowForwardIcon />}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default CheckoutButton;
