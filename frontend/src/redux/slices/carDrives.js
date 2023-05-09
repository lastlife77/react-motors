import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCarDrives = createAsyncThunk(
  "/carDrives/fetchCarDrives",
  async () => {
    const { data } = await axios.get("/carDrive");
    return data;
  }
);
const initialState = {
  carDrives: {
    items: [],
    status: "start",
  },
};

const carDriveSlice = createSlice({
  name: "carDrives",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarDrives.pending, (state) => {
        state.carDrives.items = [];
        state.carDrives.status = "loading";
      })
      .addCase(fetchCarDrives.fulfilled, (state, action) => {
        state.carDrives.items = action.payload;
        state.carDrives.status = "loaded";
      })
      .addCase(fetchCarDrives.rejected, (state) => {
        state.carDrives.items = [];
        state.carDrives.status = "error";
      });
  },
});

export const carDrivesReducer = carDriveSlice.reducer;
