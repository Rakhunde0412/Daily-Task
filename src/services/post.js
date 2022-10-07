import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `products/${id}`,
          method: "GET",
        };
      },
    }),

    getPostByLimit: builder.query({
      query: (num) => {
        console.log("ID:", num);
        return {
          url: `products?_limit=${num}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllPostQuery, useGetPostByIdQuery,useGetPostByLimitQuery } = postApi;
