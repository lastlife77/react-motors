import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCountries = createAsyncThunk(
  "/countries/fetchCountries",
  async () => {
    const { data } = await axios.get("/country");
    return data;
  }
);
const initialState = {
  countries: {
    items: [],
    status: "start",
  },
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.countries.items = [];
        state.countries.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries.items = action.payload;
        state.countries.status = "loaded";
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.countries.items = [];
        state.countries.status = "error";
      });
  },
});

export const countriesReducer = countrySlice.reducer;
