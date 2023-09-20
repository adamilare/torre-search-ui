import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

const baseUrl = BASE_URL;

const getSearch = createAsyncThunk(
  "search/getSearch",
  async (searchString, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}search`,
        { query: searchString },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return fulfillWithValue(data.data.results);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

const getRecentSearches = createAsyncThunk(
  "search/getRecentSearches",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}search/recent`);

      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

/** add new search and return all recent searches */
const addNewRecentSearch = createAsyncThunk(
  "search/getRecentSearches",
  async (reqData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}search/recent`,
        { ...reqData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

export { getSearch, getRecentSearches, addNewRecentSearch };
