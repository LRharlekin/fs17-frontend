import Box from "@mui/material/Box";

const CartEmpty = () => {
  return (
    <Box
      sx={{
        m: 2,
        borderRadius: 1,
        color: "grey.500",
        borderColor: "grey.500",
        borderWidth: 1,
        borderStyle: "solid",
        p: 2,
        bgcolor: "grey.300",
        textAlign: "center",
        height: "100%",
        "&:hover": {
          color: "secondary.light",
        },
      }}
    >
      <div>Your shopping cart is empty.</div>
    </Box>
  );
};

export default CartEmpty;
