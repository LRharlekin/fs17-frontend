import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductType, CategoryType } from "../../misc/types";

const productQueries = createApi({
  reducerPath: "productApi", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1/products",
  }),
  tagTypes: ["Product"],
  // create extended slices
  endpoints: (builder) => ({
    /* a hook is created from dispatch, async thunk action -> return data, error, loading*/
    getAllProducts: builder.query<ProductType[], void>({
      query: () => "",
      providesTags: ["Product"],
    }),
    // getSingleProduct: builder.query<ProductType, number>({
    //   query: (productId) => ({url: `${productId}`}),
    //   providesTags: ["Product"],
    // }),
    // filterProductsByCategory: builder.query<ProductType[], CategoryType>({
    //   query: (category) => ({url: `category/${category}`}),
    //   providesTags: ["Product"],
    // }),
    // sortProductsByPrice: builder.query<ProductType[], "asc" | "desc">({
    //   query: (order) => ({url: `price/${order}`}),
    //   providesTags: ["Product"],
    // }),
  }),
});

// export { useGetAllProductsQuery /*   useGetSingleProductQuery, useFilterProductsByCategoryQuery, useSortProductsByPriceQuery */} = productQueries;

export default productQueries;
/*
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { NeededType } from "../../types";

interface TemplateState {
	counterValue: number;
}

const initialState: TemplateState = {
	counterValue: 0,
}

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

const templateSlice = createSlice({
	name: "template",
	initialState,
	reducers: {
		increment: (state) => {
			state.counterValue += 1;
		},
		incrementWithInput: (state, action: PayloadAction<number>) => {
			console.log("action", action);
			state.counterValue += action.payload;
		}
	},
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
})

// actions: use in components
const { increment, incrementWithPayload } = templateSlice.actions; 
// reducer: pass into store config
const templateReducer = templateSlice.reducer; 

export { increment, incrementWithPayload };
export default templateReducer;
*/
