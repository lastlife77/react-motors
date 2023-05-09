import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchYearsAndPrices = createAsyncThunk(
  "/yearsAndPrices/fetchYearsAndPrices",
  async () => {
    const { data } = await axios.get("auto/yearsAndPrices");
    return data;
  }
);
const initialState = {
  yearsAndPrices: {
    items: [],
    status: "start",
  },
};

const yearAndPriceSlice = createSlice({
  name: "yearsAndPrices",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYearsAndPrices.pending, (state) => {
        state.yearsAndPrices.items = [];
        state.yearsAndPrices.status = "loading";
      })
      .addCase(fetchYearsAndPrices.fulfilled, (state, action) => {
        state.yearsAndPrices.items = action.payload;
        state.yearsAndPrices.status = "loaded";
      })
      .addCase(fetchYearsAndPrices.rejected, (state) => {
        state.yearsAndPrices.items = [];
        state.yearsAndPrices.status = "error";
      });
  },
});

export const yearsAndPricesReducer = yearAndPriceSlice.reducer;
