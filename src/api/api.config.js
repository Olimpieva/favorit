import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiConfig = {
  baseUrl: "https://api.favorit-parts.ru/hs/hsprice/",
  key: "00000000-0000-0000-0000-000000000001",
};

export const baseQuery = fetchBaseQuery({
  baseUrl: apiConfig.baseUrl,
  paramsSerializer: params => new URLSearchParams({ ...params, key: apiConfig.key }).toString(),
  validateStatus: (response, data) =>
    response.ok && data !== null && typeof data === "object" && !Array.isArray(data) && !data.error,
});
