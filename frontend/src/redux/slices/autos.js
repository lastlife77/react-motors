import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../axios";

export const fetchAutos = createAsyncThunk(
  "/autos/fetchAutos",
  async (params) => {
    const { data } = await axios.get("/auto", params);
    return data;
  }
);
const initialState = {
  autos: {
    items: [],
    status: "start",
  },
};

const autoSlice = createSlice({
  name: "autos",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAutos.pending, (state) => {
        state.autos.items = [];
        state.autos.status = "loading";
      })
      .addCase(fetchAutos.fulfilled, (state, action) => {
        state.autos.items = action.payload;
        state.autos.status = "loaded";
      })
      .addCase(fetchAutos.rejected, (state) => {
        state.autos.items = [];
        state.autos.status = "error";
      });
  },
});

export const autosReducer = autoSlice.reducer;
