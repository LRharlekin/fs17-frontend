import { useAppSelector } from "../../hooks";
import { selectCart } from "./cartSlice";

import { Divider, Stack, SwipeableDrawer } from "@mui/material";

import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartEmpty from "./CartEmpty";

import CheckoutButton from "./CheckoutButton";

type CartDrawerProps = {
  isCartOpen: boolean;
  toggleFunc: () => void;
};

const CartDrawer = ({ isCartOpen, toggleFunc }: CartDrawerProps) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const cartItems = useAppSelector(selectCart);

  const content =
    cartItems.length > 0 ? <CartList cartItems={cartItems} /> : <CartEmpty />;

  return (
    <SwipeableDrawer
      anchor="right"
      disableBackdropTransition={!iOS}
      /* disable discovery feature on iOS, so not to interfere with iOS's "swipe to go back" feature */
      disableDiscovery={iOS}
      open={isCartOpen}
      onOpen={toggleFunc}
      onClose={toggleFunc}
      ModalProps={{
        keepMounted: false,
      }}
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
      <CheckoutButton disabled={cartItems.length === 0} />
    </SwipeableDrawer>
  );
};

export default CartDrawer;
