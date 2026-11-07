import { createSelector } from "@reduxjs/toolkit";
import { skipToken } from "@reduxjs/toolkit/query";
import { partsApi } from "@/api/parts/parts.api";
import { selectSearchArticle, selectSelectedBrand } from "../search";

const EMPTY_PARTS = [];

const selectPartsQuerySelector = createSelector([selectSearchArticle], article =>
  partsApi.endpoints.getPartsByArticle.select(article || skipToken),
);

const selectParts = state => {
  const selectPartsQuery = selectPartsQuerySelector(state);
  const queryResult = selectPartsQuery(state);

  return queryResult.data ?? EMPTY_PARTS;
};

export const selectBrands = createSelector([selectParts], parts =>
  Object.entries(Object.groupBy(parts, part => part.brand))
    .filter(([brand]) => brand)
    .map(([brand, parts]) => ({ brand, parts })),
);

export const selectPartsByBrand = createSelector(
  [selectBrands, selectSelectedBrand],
  (brands, brand) => brands.find(item => item.brand === brand)?.parts ?? EMPTY_PARTS,
);
