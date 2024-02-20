import { configureStore } from "@reduxjs/toolkit";

// import reducers

const store = configureStore({
  reducer: {
    // users
    // products
    // cart
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
