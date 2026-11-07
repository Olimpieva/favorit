import { createSlice } from "@reduxjs/toolkit";

const initialState = { article: null, brand: null, partNumber: null };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setArticle(state, { payload }) {
      if (state.article === payload) return;

      state.article = payload;
      state.brand = null;
      state.partNumber = null;
    },
    selectBrand(state, { payload }) {
      if (state.brand === payload) return;

      state.brand = payload;
      state.partNumber = null;
    },
    selectPart(state, { payload }) {
      state.partNumber = payload;
    },
    resetSearch: () => initialState,
  },
});

export const { setArticle, selectBrand, selectPart, resetSearch } = searchSlice.actions;

export default searchSlice;
