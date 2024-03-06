import type { AppState } from "../../app/store";

export const selectCart = (state: AppState) => state.cart.cartItems;
export const selectCartQuantity = (state: AppState) => {
  return state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
};
