import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../app/store";

import {
  ProductType,
  ProductToAddType,
  ProductToDeleteType,
  ProductToUpdateType,
  ProductToUpdateBodyType,
} from "../../misc/types";

type InitialState = {
  products: Array<ProductType>;
};

const initialState: InitialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<ProductType>>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;

export const selectProductById = (state: AppState, id: number) => {
  return state.products.products.find((product) => product.id === id);
};
export const selectPricesByIds = (state: AppState, ids: number[]) => {
  return ids.reduce((acc, id) => {
    const product = state.products.products.find(
      (product) => product.id === id
    );
    if (product) {
      acc.set(product.id, product.price);
    }
    return acc;
  }, new Map<number, number>());
};
