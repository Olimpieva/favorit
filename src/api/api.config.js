import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "/api/parts",
  timeout: 15_000,
  validateStatus: (response, data) =>
    response.ok && data !== null && typeof data === "object" && !Array.isArray(data) && !data.error,
});
