import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../slices/authSlice";

import type { UserRegisterType } from "../../misc/types";
import type { AppState } from "../store";

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
  credentials: "include", // set 'HttpOnly' and 'Secure' on cookies
  // if present, inject auth headers on every request
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// const authApi = createApi({});

// export default authApi;
