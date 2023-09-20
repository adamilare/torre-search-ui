import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

const baseUrl = BASE_URL;

const addFavorite = createAsyncThunk(
  "favorite/addToFavorite",
  async (regData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}favorite`,
        { ...regData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

const getFavorites = createAsyncThunk(
  "favourite/getFavorites",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}favorite`);

      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

const removeFavorite = createAsyncThunk(
  "favorite/removeFavorite",
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.delete(`${baseUrl}favorite/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

export { addFavorite, getFavorites, removeFavorite };
