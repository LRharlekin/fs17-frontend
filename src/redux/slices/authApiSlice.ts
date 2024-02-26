// Extend the API slice to auth
import type { AuthUserSessionResponse } from "../../misc/types";

import { authApi } from "../services/authApi";

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
  }),
});

export const { useLoginMutation, useGetUserWithSessionQuery } = authApiSlice;
