import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  quantity: number;
};

type CartState = {
  cartItems: Array<CartItem>;
};

const cartInStorage = localStorage.getItem("cart");
const cartFromStorage = cartInStorage ? JSON.parse(cartInStorage) : [];

const initialState: CartState = {
  cartItems: cartFromStorage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCartQuantity: (state, action: PayloadAction<number>) => {
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
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { incrementCartQuantity, decrementCartQuantity, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
