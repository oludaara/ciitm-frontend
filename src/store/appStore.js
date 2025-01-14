import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import aboutSlice from "./AboutSlice";

export const appStore = configureStore({
  reducer: {
    home: homeSlice,
    about: aboutSlice,
  },
});
