import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../store";

type CartItem = {
  id: number;
  quantity: number;
};

type CartState = {
  cartItems: Array<CartItem>;
};

const initialState: CartState = {
  cartItems: [
    // { id: 1, quantity: 1 },
    // { id: 2, quantity: 1 },
    // { id: 4, quantity: 3 },
    // { id: 5, quantity: 2 },
    // { id: 6, quantity: 1 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCartQuantity: (state, action: PayloadAction<number>) => {
      // check if item is already in cart, if so, increment quantity
      // if not, add item to cart with quantity of 1
      const cartItems = state.cartItems;
      const item = cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      } else {
        cartItems.push({
          id: action.payload,
          quantity: 1,
        });
      }
    },
    decrementCartQuantity: (state, action: PayloadAction<number>) => {
      // check if item is already in cart, if so, decrement quantity
      // if not, do nothing
      // if quantity is 1, remove item from cart
      const cartItems = state.cartItems;
      const item = cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          cartItems.splice(cartItems.indexOf(item), 1);
        } else {
          item.quantity -= 1;
        }
      }
    },
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
