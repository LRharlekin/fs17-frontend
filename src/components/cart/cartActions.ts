import type { AppDispatch } from "../../app/store";

import {
  incrementCartQuantity as incrementCartQuantityAction,
  decrementCartQuantity as decrementCartQuantityAction,
} from "./cartSlice";

export const incrementCartQuantityAndSave =
  (itemId: number) => (dispatch: AppDispatch) => {
    const cartInLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

    const item = cartInLocalStorage.find((item: any) => item.id === itemId);
    if (item) {
      item.quantity += 1;
    } else {
      cartInLocalStorage.push({
        id: itemId,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartInLocalStorage));

    dispatch(incrementCartQuantityAction(itemId));
  };

export const decrementCartQuantityAndSave =
  (itemId: number) => (dispatch: AppDispatch) => {
    const cartInLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

    const item = cartInLocalStorage.find((item: any) => item.id === itemId);
    if (item) {
      if (item.quantity === 1) {
        cartInLocalStorage.splice(cartInLocalStorage.indexOf(item), 1);
      } else {
        item.quantity -= 1;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cartInLocalStorage));

    dispatch(decrementCartQuantityAction(itemId));
  };
