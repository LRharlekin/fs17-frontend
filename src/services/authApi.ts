import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../components/auth/authSlice";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import type {
  AuthTokenResponse,
  AuthUserSessionResponse,
  UserRegisterType,
} from "../misc/types";
import type { AppState } from "../app/store";

/* prepareHeaders signature: */
// type prepareHeaders = (
//   headers: Headers,
//   api: {
//     getState: () => unknown
//     extra: unknown
//     endpoint: string
//     type: 'query' | 'mutation'
//     forced: boolean | undefined
//   },
// ) => Headers | void

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.escuelajs.co/api/v1",
  // credentials extends from Request() constructor, fetch API
  // credentials: "include", // set 'HttpOnly' and 'Secure' on cookies
  // if present, inject auth headers on every request
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

/* 
Extending fetchBaseQuery to automatically handle re-authentication
https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery */

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // Check for 401 = Unauthorized
  if (result.error && result.error.status === 401) {
    // try to get a new token
    console.log("Requesting new access with refresh token");
    const refreshResult = await baseQuery(
      "/auth/refresh-token",
      api,
      extraOptions
    );
    if (refreshResult.data) {
      console.log("New access token received.");
      // pull user from state
      const { access_token: token, refresh_token: refreshToken } =
        refreshResult.data as AuthTokenResponse;
      const user = {
        email: (api.getState() as AppState).auth.email,
        token,
        refreshToken,
      };
      // store the new token
      api.dispatch(setCredentials({ ...user }));
      // retry the initial query with new access token
      console.log("Retrying original request");
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log("No new access token received. Logging out.");
      api.dispatch(logout());
    }
  }
  // Check for 403 = Forbidden (e.g. expired access token)
  if (result.error && result.error.status === 403) {
    console.log("403 error");
    console.log("try request with refresh token");
  }

  return result;
};

const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export { authApi };
