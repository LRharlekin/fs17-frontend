import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

type CartItem = {
  id: number;
  quantity: number;
};

type CartState = {
  cartItems: Array<CartItem>;
};

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCartQuantity: (state, action: PayloadAction<number>) => {
      const cartItems = state.cartItems;
      // check if item is already in cart,
      const item = cartItems.find((item) => item.id === action.payload);
      if (item) {
        // ...if so, increment quantity
        item.quantity += 1;
      } else {
        // ...else add item to cart with quantity of 1
        cartItems.push({
          id: action.payload,
          quantity: 1,
        });
      }
    },
    decrementCartQuantity: (state, action: PayloadAction<number>) => {
      const cartItems = state.cartItems;
      // check if item is already in cart,
      const item = cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          // if quantity === 1, remove item from cart
          cartItems.splice(cartItems.indexOf(item), 1);
        } else {
          // else if quantity !== 1, decrement quantity
          item.quantity -= 1;
        }
      }
    },
    // if item not present, do nothing
  },
});

export const { incrementCartQuantity, decrementCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state: AppState) => state.cart.cartItems;
export const selectCartQuantity = (state: AppState) => {
  return state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

export const selectCartItemQuantity = (state: AppState, id: number) => {
  const cartItems = selectCart(state);
  const item = cartItems.find((item) => item.id === id);
  return item?.quantity;
};
