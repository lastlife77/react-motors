import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCarBrands = createAsyncThunk(
  "/carBrands/fetchCarBrands",
  async () => {
    const { data } = await axios.get("/carBrand");
    return data;
  }
);
const initialState = {
  carBrands: {
    items: [],
    status: "start",
  },
};

const carBrandSlice = createSlice({
  name: "carBrands",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarBrands.pending, (state) => {
        state.carBrands.items = [];
        state.carBrands.status = "loading";
      })
      .addCase(fetchCarBrands.fulfilled, (state, action) => {
        state.carBrands.items = action.payload;
        state.carBrands.status = "loaded";
      })
      .addCase(fetchCarBrands.rejected, (state) => {
        state.carBrands.items = [];
        state.carBrands.status = "error";
      });
  },
});

export const carBrdandsReducer = carBrandSlice.reducer;
