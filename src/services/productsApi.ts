import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductType } from "../misc/types";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType[], void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),
    getProductById: builder.query<ProductType, number>({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;

export default productsApi;
