import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { partsApi } from "../../api";

export const resetBrands = createAction("brands/reset");

export const fetchPartsByArticle = createAsyncThunk(
  "brands/fetchPartsByArticle",
  async (article, { rejectWithValue, signal }) => {
    try {
      const response = await partsApi.searchParts(article, { signal });
      const goods = response.goods || [];
      const grouped = Object.groupBy(goods, part => part.brand);

      return Object.entries(grouped)
        .filter(([brand]) => brand)
        .map(([brand, parts]) => ({
          brand,
          parts,
        }));
    } catch (error) {
      return rejectWithValue(error.message || "Не удалось загрузить производителей.");
    }
  },
);
