import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCarTransmissions = createAsyncThunk(
  "/carTransmissions/fetchCarTransmissions",
  async () => {
    const { data } = await axios.get("/carTransmission");
    return data;
  }
);
const initialState = {
  carTransmissions: {
    items: [],
    status: "start",
  },
};

const carTransmissionSlice = createSlice({
  name: "carTransmissions",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarTransmissions.pending, (state) => {
        state.carTransmissions.items = [];
        state.carTransmissions.status = "loading";
      })
      .addCase(fetchCarTransmissions.fulfilled, (state, action) => {
        state.carTransmissions.items = action.payload;
        state.carTransmissions.status = "loaded";
      })
      .addCase(fetchCarTransmissions.rejected, (state) => {
        state.carTransmissions.items = [];
        state.carTransmissions.status = "error";
      });
  },
});

export const carTransmissionReducer = carTransmissionSlice.reducer;
