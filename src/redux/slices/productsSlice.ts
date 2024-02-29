import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";

import {
  ProductType,
  ProductToAddType,
  ProductToDeleteType,
  ProductToUpdateType,
  ProductToUpdateBodyType,
} from "../../misc/types";

/* dummy products data DELETE LATER */
// import { dummyProducts as data } from "./dummyProducts";

type InitialState = {
  products: Array<ProductType>;
  // loading: boolean;
  // error: string | null;
};

const initialState: InitialState = {
  products: [],
  // loading: false,
  // error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<ProductType>>) => {
      state.products = action.payload;
    },
    productAdded: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
  },
});

// actions: use in components
// const { getAllProducts } = productsSlice.actions;
export const { setProducts, productAdded } = productsSlice.actions;

// reducer: pass into store config
const productsReducer = productsSlice.reducer;
export default productsReducer;

// sub-selectors: use in components
// export const selectAllProducts = (state: InitialState) => state.products;

export const selectProductById = (state: AppState, id: number) => {
  return state.products.products.find((product) => product.id === id);
};
