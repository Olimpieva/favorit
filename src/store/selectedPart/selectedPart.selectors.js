import { createSelector } from "@reduxjs/toolkit";

export const selectCurrentPartState = state => state.selectedPart;

export const selectCurrentPartInfo = createSelector(
  selectCurrentPartState,
  selectedPart => selectedPart.data,
);
