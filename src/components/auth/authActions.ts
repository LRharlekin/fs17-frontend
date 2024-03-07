import type { AppDispatch } from "../../app/store";

import {
  setCredentials as setCredentialsAction,
  logout as logoutAction,
  setUserSession as setUserSessionAction,
} from "./authSlice";

import type {
  // AuthTokenResponse,
  // AuthUserSessionResponse,
  UserRegisterType,
} from "../../misc/types";

export const setCredentialsAndSave =
  (credentials: Pick<UserRegisterType, "email" | "token" | "refreshToken">) =>
  (dispatch: AppDispatch) => {
    const { token, refreshToken, email } = credentials;

    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    localStorage.setItem("user", JSON.stringify(email));

    dispatch(setCredentialsAction(credentials));
  };

export const logoutAndSave = () => (dispatch: AppDispatch) => {
  console.log("Running: Logout and save");
  localStorage.removeItem("cart");
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  dispatch(logoutAction());
};

export const setUserSession = setUserSessionAction;
