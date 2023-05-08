import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async (params) => {
    const { data } = await axios.post("/user/login", params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/user/register", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("user/fetchAuthMe", async () => {
  const { data } = await axios.get("/user/me");
  return data;
});

const initialState = {
  user: {
    data: "",
    status: "loading",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.user.data = null;
        state.user.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user.data = action.payload;
        state.user.status = "success";
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.user.data = null;
        state.user.status = "error";
      })
      .addCase(fetchRegister.pending, (state) => {
        state.user.data = null;
        state.user.status = "loading";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user.data = action.payload;
        state.user.status = "success";
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.user.data = null;
        state.user.status = "error";
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.user.data = null;
        state.user.status = "loading";
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.user.data = action.payload;
        state.user.status = "success";
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.user.data = null;
        state.user.status = "not auth";
      });
  },
});

export const userReducer = userSlice.reducer;

export const isAuth = (state) => Boolean(state.user.user.data);
export const { logout } = userSlice.actions;
