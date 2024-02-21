import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "../../misc/types";

/* dummy products data DELETE LATER */
// import { dummyProducts as data } from "./dummyProducts";

type InitialState = {
  products: Array<ProductType>;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  products: [],
  loading: false,
  error: null,
};

// getAllProducts
// getSingleProduct
// filterProductsByCategory
// sortProductsByPrice

// PROTECTED role === "admin"
// createProduct
// updateProduct
// deleteProduct

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<ProductType>>) => {
      state.products = action.payload;
    },
    // getAllProducts: (state, action: PayloadAction<Array<ProductType>>) => {
    //   state.products = action.payload;
    // },
  },
});

// sub-selectors: use in components
// export const selectAllProducts = (state: InitialState) => state.products;
// actions: use in components
// const { getAllProducts } = productsSlice.actions;
const { setProducts } = productsSlice.actions;
// reducer: pass into store config
const productsReducer = productsSlice.reducer;

// export { getAllProducts };
export { setProducts };
export default productsReducer;
