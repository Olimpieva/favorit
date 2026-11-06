import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../api.config";
import { transformApiError } from "../api.errors";

export const partsApi = createApi({
  reducerPath: "parts",
  baseQuery,
  keepUnusedDataFor: 300,
  endpoints: build => ({
    getPartsByArticle: build.query({
      query: number => ({
        url: "",
        params: { number },
      }),
      transformResponse: response => response.goods ?? [],
      transformErrorResponse: transformApiError,
    }),
    getPartInfo: build.query({
      query: ({ number, brand }) => ({
        url: "",
        params: { number, brand, analogues: "on" },
      }),
      transformResponse: response => response.goods?.[0] ?? null,
      transformErrorResponse: transformApiError,
    }),
  }),
});

export const { useGetPartsByArticleQuery, useGetPartInfoQuery } = partsApi;
