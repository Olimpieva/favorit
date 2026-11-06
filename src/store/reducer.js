import { combineReducers } from "@reduxjs/toolkit";
import brandsReducer from "./brands/brands.reducer";

const reducer = combineReducers({
  brands: brandsReducer,
});

export default reducer;
