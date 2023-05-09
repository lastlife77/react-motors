import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCarEngines = createAsyncThunk(
  "/carEngines/fetchCarEngines",
  async () => {
    const { data } = await axios.get("/carEngine");
    return data;
  }
);
const initialState = {
  carEngines: {
    items: [],
    status: "start",
  },
};

const carEngineSlice = createSlice({
  name: "carEngines",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarEngines.pending, (state) => {
        state.carEngines.items = [];
        state.carEngines.status = "loading";
      })
      .addCase(fetchCarEngines.fulfilled, (state, action) => {
        state.carEngines.items = action.payload;
        state.carEngines.status = "loaded";
      })
      .addCase(fetchCarEngines.rejected, (state) => {
        state.carEngines.items = [];
        state.carEngines.status = "error";
      });
  },
});

export const carEngineReducer = carEngineSlice.reducer;
