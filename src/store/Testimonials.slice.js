import { createSlice } from '@reduxjs/toolkit';

const testimonials_Slice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: null,
  },
  reducers: {
    setTestimonials_Data: (state, action) => {
      state.testimonials = action.payload;
    },
  },
});

export const { setTestimonials_Data } = testimonials_Slice.actions;
export default testimonials_Slice.reducer;
