import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./uiSlice";

export const appStore = configureStore({
  reducer: {
    ui: uiSliceReducer,
  },
});
