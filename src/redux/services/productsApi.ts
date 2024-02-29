import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductType, CategoryType } from "../../misc/types";

const productsApi = createApi({
  // reducerPath = unique key to mount service to in store
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  // tags can be used for caching and invalidation >> configure with providesTags and invalidatesTags in each endpoint below
  tagTypes: ["Product"],
  // create extended slices >> "endpoints" = set of operations (query or mutation) you want to perform against your server
  endpoints: (builder) => ({
    /* a hook is created from dispatch, async thunk action -> return data, error, loading*/
    getAllProducts: builder.query<ProductType[], void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;

export default productsApi;
