import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
   name: 'home',
   initialState: {
      landingPage: null,
      Testimonital: null,
      Album: null,
   },
   reducers: {
      setLandingPage: (state, action) => {
         state.landingPage = action.payload;
      },

      setTestimonital: (state, action) => {
         state.Testimonital = action.payload;
      },

      setAlbum: (state, action) => {
         state.Album = action.payload;
      },
   },
});

export const { setLandingPage, setTestimonital, setAlbum } =
   homeSlice.actions;
export default homeSlice.reducer;
