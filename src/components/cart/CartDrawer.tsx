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

  const CartList = (
    <Box role="presentation">
      <List>
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
