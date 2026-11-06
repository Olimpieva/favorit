import { createSlice } from "@reduxjs/toolkit";

const initialState = { article: null, brand: null, partId: null };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setArticle(state, { payload }) {
      if (state.article === payload) return;

      state.article = payload;
      state.brand = null;
      state.partId = null;
    },
    selectBrand(state, { payload }) {
      if (state.brand === payload) return;

      state.brand = payload;
      state.partId = null;
    },
    selectPart(state, { payload }) {
      state.partId = payload;
    },
    resetSearch: () => initialState,
  },
});

export const { setArticle, selectBrand, selectPart, resetSearch } = searchSlice.actions;

export default searchSlice;
