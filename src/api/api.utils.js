import { apiConfig } from "./api.config.js";
import { errors } from "./api.errors.js";

export const request = async (params, { signal } = {}) => {
  const url = new URL(apiConfig.baseUrl);
  url.searchParams.set("key", apiConfig.key);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(name, value);
    }
  });

  let response;

  try {
    response = await fetch(url, { signal });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new Error(errors.network);
  }

  let data;

  try {
    data = await response.json();
    console.log({ data });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    if (response.ok) throw new Error(errors[500]);
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  if (!response.ok) {
    throw new Error(errors[response.status] || errors[500]);
  }

  if (!data || typeof data !== "object") {
    throw new Error(errors[500]);
  }

  return data;
};
