import { useAppSelector } from "../../hooks";
import { selectCart } from "../../redux/slices/cartSlice";

import { Box, Divider, List, Stack, SwipeableDrawer } from "@mui/material";

import CartHeader from "./CartHeader";
import CheckoutButton from "./CheckoutButton";
import CartListItem from "./CartListItem";

type CartDrawerProps = {
  isCartOpen: boolean;
  toggleFunc: () => void;
};

const CartDrawer = ({ isCartOpen, toggleFunc }: CartDrawerProps) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const cartItems = useAppSelector(selectCart);
  console.log("selected cart items from drawer:", cartItems);

  const CartList = (
    <Box role="presentation">
      <List>
        {/* select cart items from redux store */}
        {cartItems.map(({ id, quantity }) => {
          // console.log("cart item id:", id);
          // console.log("cart item quantity:", quantity);
          return <CartListItem itemId={id} quantity={quantity} />;
        })}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      disableBackdropTransition={!iOS}
      /* disable discovery feature on iOS, so not to interfere with iOS's "swipe to go back" feature */
      disableDiscovery={iOS}
      open={isCartOpen}
      onOpen={toggleFunc}
      onClose={toggleFunc}
    >
      <CartHeader />
      <Divider />
      <Stack
        sx={{
          width: 300,
        }}
      >
        {CartList}
      </Stack>
      <CheckoutButton />
    </SwipeableDrawer>
  );
};

export default CartDrawer;
