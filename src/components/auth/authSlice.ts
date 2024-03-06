import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { useLocalStorage } from "../../hooks";

import type {
  AuthUserSessionResponse,
  UserRegisterType,
  UserType,
} from "../../misc/types";
import type { AppState } from "../../app/store";

const initialState: UserType = {
  id: null,
  name: null,
  email: null,
  password: null,
  token: null,
  refreshToken: null,
  avatar: null,
  role: null,
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
    setUserSession: (state, action: PayloadAction<AuthUserSessionResponse>) => {
      const { id, name, role, avatar } = action.payload;
      state.id = id;
      state.name = name;
      state.role = role;
      state.avatar = avatar;
    },
    logout: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("persist:root");
    },
  },
});

export const { setCredentials, setUserSession, logout } = authSlice.actions;

export default authSlice.reducer;
