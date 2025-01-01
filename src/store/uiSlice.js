import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    landingPage: null,
    aboutPage: null,
  },
  reducers: {
    setLandingPage: (state, action) => {
      state.landingPage = action.payload;
    },
    setAboutPage: (state, action) => {
      state.aboutPage = action.payload;
    },
  },
});

export const { setLandingPage, setAboutPage } = uiSlice.actions;
export default uiSlice.reducer;
