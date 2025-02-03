import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeSlice';
import aboutSlice from './AboutSlice';
import Admission_Slice from './AdmissionSlice';

export const appStore = configureStore({
   reducer: {
      home: homeSlice,
      about: aboutSlice,
      admission: Admission_Slice,
   },
});
