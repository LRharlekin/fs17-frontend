import type { AppState } from "../../app/store";

export const selectCart = (state: AppState) => state.cart.cartItems;
export const selectCartQuantity = (state: AppState) => {
  return state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
};
export const selectCartQuantityById = (state: AppState, id: number) => {
  const item = state.cart.cartItems.find((item) => item.id === id);
  return item ? item.quantity : 0;
};
