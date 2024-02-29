import React from "react";

import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CheckoutButton = () => {
  return (
    <Button
      sx={{
        m: 2,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      variant="contained"
      endIcon={<ArrowForwardIcon />}
    >
      Checkout
    </Button>
  );
};

export default CheckoutButton;
