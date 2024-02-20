import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// getAllProducts
// getSingleProduct
// filterProductsByCategory
// sortProductsByPrice

// PROTECTED
// createProduct
// updateProduct
// deleteProduct

/*
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

const productSlice = {};

export default productSlice;
