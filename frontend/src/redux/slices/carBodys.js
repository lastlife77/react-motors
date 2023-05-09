import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCarBodys = createAsyncThunk(
  "/carBodys/fetchCarBodys",
  async () => {
    const { data } = await axios.get("/carBody");
    return data;
  }
);
const initialState = {
  carBodys: {
    items: [],
    status: "start",
  },
};

const carBodySlice = createSlice({
  name: "carBodys",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarBodys.pending, (state) => {
        state.carBodys.items = [];
        state.carBodys.status = "loading";
      })
      .addCase(fetchCarBodys.fulfilled, (state, action) => {
        state.carBodys.items = action.payload;
        state.carBodys.status = "loaded";
      })
      .addCase(fetchCarBodys.rejected, (state) => {
        state.carBodys.items = [];
        state.carBodys.status = "error";
      });
  },
});

export const carBodysReducer = carBodySlice.reducer;
