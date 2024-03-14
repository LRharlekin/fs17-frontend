import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import reducers
import authReducer from "../components/auth/authSlice";
import cartReducer from "../components/cart/cartSlice";
import productsReducer from "../components/collection/productsSlice";

// import services
import productsApi from "../services/productsApi";
import { authApi } from "../services/authApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [productsApi.reducerPath],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      // getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(authApi.middleware),
});

// required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
