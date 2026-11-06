import { createReducer } from "@reduxjs/toolkit";
import {
  fetchPartInfo,
  resetPartInfo,
  selectPart,
  resetSelectedPart,
} from "./selectedPart.actions";

const initialState = {
  id: null,
  data: null,
  loading: false,
  loaded: false,
  error: null,
};

const selectedPartReducer = createReducer(initialState, builder => {
  builder
    .addCase(fetchPartInfo.pending, state => {
      state.loading = true;
      state.loaded = false;
      state.error = null;
      state.data = null;
    })
    .addCase(fetchPartInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.error = null;
      state.data = payload.goods?.[0] ?? null;
    })
    .addCase(fetchPartInfo.rejected, (state, { payload, meta }) => {
      if (meta.aborted) return;
      state.loading = false;
      state.loaded = false;
      state.error = payload || "Не удалось загрузить информацию о детали.";
    })
    .addCase(resetPartInfo, () => initialState)
    .addCase(selectPart, (state, { payload }) => {
      state.id = payload;
    })
    .addCase(resetSelectedPart, () => initialState);
});

export default selectedPartReducer;
