import React, { useState, KeyboardEvent, MouseEvent } from "react";

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

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import CartHeader from "./CartHeader";
import CheckoutButton from "./CheckoutButton";
import ProductFeed from "../products/ProductFeed";

const CartDrawer = () => {
  const [cartOpen, setCartOpen] = useState(true);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer =
    (newOpen: boolean) => (event: KeyboardEvent | MouseEvent) => {
      setCartOpen(newOpen);
    };

  const DrawerList = (
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
      open={cartOpen}
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
    >
      <CartHeader />
      <Divider />
      <Stack
        sx={{
          width: 300,
        }}
      >
        {DrawerList}
        <ProductFeed feedData={[]} />
      </Stack>
      <CheckoutButton />
    </SwipeableDrawer>
  );
};

export default CartDrawer;
