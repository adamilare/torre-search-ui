import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, getFavorites, removeFavorite } from "./favoriteThunk";

const initialState = {
  favorites: null,
  loading: false,
  error: null,
};

const unSetFavoriteReducer = (state, { payload }) => {
  const newFavorites = state.favorites.filter((item) => item.id !== payload);

  return {
    ...state,
    favorites: newFavorites,
  };
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: { unSetFavorite: unSetFavoriteReducer },
  extraReducers: (builder) => {
    builder
      .addCase(addFavorite.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(addFavorite.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        favorites: payload,
      }))
      .addCase(addFavorite.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(getFavorites.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getFavorites.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        favorites: payload,
      }))
      .addCase(getFavorites.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(removeFavorite.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(removeFavorite.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        favorites: payload,
      }))
      .addCase(removeFavorite.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export const { unSetFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
