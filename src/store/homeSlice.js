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

      Remove_One_Album: (state, action) => {
         let index = state.Album.findIndex(
            item => item._id === action.payload._id,
         );
         if (index !== -1) {
            // Splice is used to remove the item from the Original Array it also returns the removed item
            state.Album.splice(index, 1);
         }
      },
   },
});

export const {
   setLandingPage,
   setTestimonital,
   setAlbum,
   Remove_One_Album,
} = homeSlice.actions;
export default homeSlice.reducer;
