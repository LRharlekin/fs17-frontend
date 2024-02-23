// Extend the API slice to auth
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
  }),
});

export const { useLoginMutation } = authApiSlice;
