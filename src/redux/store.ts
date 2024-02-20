import { configureStore } from "@reduxjs/toolkit";

// import redux hooks
import { useAppDispatch, useAppSelector } from "../hooks";

// import reducers
import productsReducer from "./slices/productsSlice";
// import services
import productQueries from "./services/productQueries";

const store = configureStore({
  reducer: {
    // users
    // products
    products: productsReducer,
    // cart
    [productQueries.reducerPath]: productQueries.reducer,
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
