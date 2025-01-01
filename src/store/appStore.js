import { configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from './uiSlice';
import albumSliceReducer from './Album.slice';
import testimonialSliceReducer from './Testimonials.slice';

export const appStore = configureStore({
  reducer: {
    ui: uiSliceReducer,
    album: albumSliceReducer,
    testimonials: testimonialSliceReducer,
  },
});
