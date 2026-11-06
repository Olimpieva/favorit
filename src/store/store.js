import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/search.slice";
import { partsApi } from "@/api/parts/parts.api";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    [partsApi.reducerPath]: partsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(partsApi.middleware),
});

export default store;
