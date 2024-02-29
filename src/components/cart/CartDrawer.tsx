import React, { /* useState, */ KeyboardEvent, MouseEvent } from "react";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
} from "@mui/material";

/* -------- DELETE LATER -------- */
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
/* -------- DELETE LATER -------- */

import CartHeader from "./CartHeader";
import CheckoutButton from "./CheckoutButton";
import ProductFeed from "../products/ProductFeed";

type CartDrawerProps = {
  isCartOpen: boolean;
  toggleFunc: () => void;
};

const CartDrawer = ({ isCartOpen, toggleFunc }: CartDrawerProps) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  // const toggleDrawer = () => (event: KeyboardEvent | MouseEvent) => {
  //   if (isCartOpen) {
  //     onCartClose();
  //   } else {
  //     onCartOpen();
  //   }
  // };

  const CartList = (
    <Box role="presentation">
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
        <ProductFeed feedData={[]} />
      </Stack>
      <CheckoutButton />
    </SwipeableDrawer>
  );
};

export default CartDrawer;
