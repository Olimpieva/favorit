import { createReducer } from "@reduxjs/toolkit";
import { fetchPartsByArticle, resetBrands } from "./brands.actions";

const initialState = {
  brands: [],
  loading: false,
  loaded: false,
  error: null,
};

const brandsReducer = createReducer(initialState, builder => {
  builder
    .addCase(resetBrands, () => initialState)
    .addCase(fetchPartsByArticle.pending, state => {
      state.brands = [];
      state.loading = true;
      state.loaded = false;
      state.error = null;
    })
    .addCase(fetchPartsByArticle.fulfilled, (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.error = null;
      state.brands = action.payload;
    })
    .addCase(fetchPartsByArticle.rejected, (state, action) => {
      state.loading = false;
      state.loaded = false;
      state.error = action.meta.aborted ? null : action.payload;
    });
});

export default brandsReducer;
