import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { partsApi } from "@/api";

export const fetchPartInfo = createAsyncThunk(
  "selectedPart/fetchPartInfo",
  async ({ number, brand }, { rejectWithValue, signal }) => {
    try {
      const result = await partsApi.searchParts(number, { brand, analogues: true, signal });
      console.log({ result });
      return result;
    } catch (error) {
      return rejectWithValue(error.message || "Не удалось загрузить информацию о детали.");
    }
  },
);

export const resetPartInfo = createAction("selectedPart/resetPartInfo");

export const selectPart = createAction("selectedPart/selectPart", partId => ({
  payload: partId,
}));

export const resetSelectedPart = createAction("selectedPart/resetSelectedPart");
