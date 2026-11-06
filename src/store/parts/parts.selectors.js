import { createSelector } from "@reduxjs/toolkit";

const EMPTY_PARTS = [];

const selectParts = parts => parts ?? EMPTY_PARTS;

export const selectBrands = createSelector([selectParts], parts =>
  Object.entries(Object.groupBy(parts, part => part.brand))
    .filter(([brand]) => brand)
    .map(([brand, parts]) => ({ brand, parts })),
);

export const selectPartsByBrand = createSelector(
  [selectBrands, (_parts, brand) => brand],
  (brands, brand) => brands.find(item => item.brand === brand)?.parts ?? EMPTY_PARTS,
);
