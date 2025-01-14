import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    landingPage: null,
    aboutPage: null,
    testimonials: null,
  },
  reducers: {
    setLandingPage: (state, action) => {
      state.landingPage = action.payload;
    },
    setAboutPage: (state, action) => {
      state.aboutPage = action.payload;
    },
  },
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
  },
);

export const { setLandingPage, setAboutPage, setTestimonials } = uiSlice.actions;
export default uiSlice.reducer;
