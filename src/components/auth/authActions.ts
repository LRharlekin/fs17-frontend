import { useAppDispatch, useLocalStorage } from "../../hooks";

import {
  setCredentials as setCredentialsAction,
  logout as logoutAction,
  setUserSession as setUserSessionAction,
} from "./authSlice";

import type {
  AuthTokenResponse,
  AuthUserSessionResponse,
  UserRegisterType,
} from "../../misc/types";

import type { AppState } from "../../app/store";

export const setCredentials =
  (credentials: Pick<UserRegisterType, "email" | "token" | "refreshToken">) =>
  (dispatch: any) => {
    // Save to local storage
    useLocalStorage("credentials", credentials);
    localStorage.setItem("credentials", JSON.stringify(credentials));

    // Dispatch the action to update the Redux state
    dispatch(setCredentialsAction(credentials));
  };

export const logout = logoutAction;
export const setUserSession = setUserSessionAction;
