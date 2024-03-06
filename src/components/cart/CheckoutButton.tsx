import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type CheckoutButtonProps = {
  disabled?: boolean;
};

const CheckoutButton = ({ disabled }: CheckoutButtonProps) => {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "info.light",
        mt: "auto",
      }}
    >
      <Button
        disabled={disabled}
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
