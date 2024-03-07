// Extend the API slice to auth
import type { AuthUserSessionResponse } from "../../misc/types";

import { authApi } from "../../services/authApi";

export const authApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginCredentials) => ({
        url: "/auth/login",
        method: "POST",
        body: loginCredentials,
      }),
    }),
    getUserWithSession: builder.query<AuthUserSessionResponse, void>({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
    }),
    register: builder.mutation({
      query: (registerCredentials) => ({
        url: "/users",
        method: "POST",
        body: registerCredentials,
      }),
    }),
    getNewAccessToken: builder.mutation({
      query: (refreshToken) => ({
        url: "/auth/refresh-token",
        method: "POST",
        body: refreshToken,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserWithSessionQuery,
  useRegisterMutation,
  useGetNewAccessTokenMutation,
} = authApiSlice;
