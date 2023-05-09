import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCarModels = createAsyncThunk(
  "/carModels/fetchCarModels",
  async () => {
    const { data } = await axios.get("/carModel");
    return data;
  }
);
const initialState = {
  carModels: {
    items: [],
    status: "start",
  },
};

const carModelSlice = createSlice({
  name: "carModels",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarModels.pending, (state) => {
        state.carModels.items = [];
        state.carModels.status = "loading";
      })
      .addCase(fetchCarModels.fulfilled, (state, action) => {
        state.carModels.items = action.payload;
        state.carModels.status = "loaded";
      })
      .addCase(fetchCarModels.rejected, (state) => {
        state.carModels.items = [];
        state.carModels.status = "error";
      });
  },
});

export const carModelsReducer = carModelSlice.reducer;
