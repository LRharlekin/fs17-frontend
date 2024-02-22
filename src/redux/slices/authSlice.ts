import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import type { UserRegisterType } from "../../misc/types";
import type { AppState } from "../store";
// type InitialStateType = {
//   name: string;
//   email: string;
//   password: string;
//   token: string;
// };

const initialState: UserRegisterType = {
  name: null,
  email: null,
  password: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserRegisterType>) => {
      const { name, token: accessToken } = action.payload;
      state.name = name;
      state.token = accessToken;
    },
    logout: (state) => {
      state.name = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: AppState) => state.auth.name;
export const selectCurrentToken = (state: AppState) => state.auth.token;
