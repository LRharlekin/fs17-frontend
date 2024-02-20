import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "../../misc/types";

/* dummy products data DELETE LATER */
import { dummyProducts as data } from "./dummyProducts";

type InitialState = {
  products: Array<ProductType>;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  products: data,
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

/*
// declare async reducers
const url = "https://api.example.com/data";

export const fetchNeededDataAsync = createAsyncThunk(
  "fetchNeededData",
  async () => {
    try {
      const jsonData = await fetch(url);
      const data: NeededType = await jsonData.json();
      return data;
    } catch (error) {
      const error = e as Error;
      return error;
    }
  }
);
*/

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action: PayloadAction<Array<ProductType>>) => {
      state.products = action.payload;
    },
  },
  /*
  extraReducers: (builder) => {
    builder.addCase(fetchNeededDataAsync.fulfilled, (state, action) => {
      console.log("action", action);
      state.counterValue += 1;
    })
    // loading
    .addCase(fetchNeededDataAsync.pending, (state, action) => {...})
    // rejected
    .addCase(fetchNeededDataAsync.rejected, (state, action) => {...};
    // default case if no other handlers match
    .addDefaultCase((state, action) => {...});
  }
  */
});

// sub-selectors: use in components
// export const selectAllProducts = (state: InitialState) => state.products;
// actions: use in components
const {} = productsSlice.actions;
// reducer: pass into store config
const productsReducer = productsSlice.reducer;

export {};
export default productsReducer;
