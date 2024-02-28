import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButton = () => {
  return (
    <Button variant="outlined" size="small" color="primary">
      <AddShoppingCartIcon />
    </Button>
  );
};

export default AddToCartButton;
