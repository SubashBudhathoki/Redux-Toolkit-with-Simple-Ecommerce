import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Apislice = createApi({
  reducerPath: "Apislice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = Apislice;
