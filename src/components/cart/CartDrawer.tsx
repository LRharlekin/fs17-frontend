import { useAppSelector } from "../../hooks";
import { selectCart } from "./cartSlice";

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

  const CartList = (
    <List sx={{ my: 1 }}>
      {cartItems.map(({ id, quantity }, index) => {
        if (index === 0) {
          return <CartListItem itemId={id} quantity={quantity} />;
        } else {
          return (
            <>
              <Divider />
              <CartListItem itemId={id} quantity={quantity} />
            </>
          );
        }
      })}
    </List>
  );

  const content = cartItems.length > 0 ? CartList : "Your Cart is Empty";

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
          overflow: "auto",
        }}
      >
        {content}
      </Stack>
      <CheckoutButton />
    </SwipeableDrawer>
  );
};

export default CartDrawer;
