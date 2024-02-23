import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import type { UserRegisterType } from "../../misc/types";
import type { AppState } from "../store";

const initialState: UserRegisterType = {
  name: null,
  email: null,
  password: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<
        Pick<UserRegisterType, "email" | "token" | "refreshToken">
      >
    ) => {
      const { email, token, refreshToken } = action.payload;
      state.email = email;
      state.token = token;
      state.refreshToken = refreshToken;
    },
    logout: (state) => {
      state.email = null;
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: AppState) => state.auth.name;
export const selectCurrentToken = (state: AppState) => state.auth.token;
