import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/searchSlice";
import favoriteSlice from "./favorite/favoriteSlice";

export default configureStore({
  reducer: {
    search: searchSlice,
    favorite: favoriteSlice,
  },
});
