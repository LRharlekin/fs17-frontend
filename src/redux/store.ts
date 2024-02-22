import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// import reducers
// import productsReducer from "./slices/productsSlice";
import usersReducer from "./slices/usersSlice";
import authReducer from "./slices/authSlice";
// import services
import productsApi from "./services/productsApi";

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    // products
    // products: productsReducer,
    // cart
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of RTK Query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
