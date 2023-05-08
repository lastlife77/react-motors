import { configureStore } from "@reduxjs/toolkit";
import { autosReducer } from "./slices/autos";
import { userReducer } from "./slices/user";

const store = configureStore({
  reducer: {
    autos: autosReducer,
    user: userReducer,
  },
});

export default store;
