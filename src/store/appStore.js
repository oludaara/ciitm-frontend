import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeSlice';
import gallerySlice from './GallerySlice';
import aboutSlice from './AboutSlice';
import authSlice from './AuthSlice';
import Admission_Slice from './AdmissionSlice';
import Image_Slice from './ImageSlice';
import MenuSlice from './MenuSlice';
import SocialLinkSlice from './SocialLinkSlice';
import PaymentSlice from './PaymentSlice';

export const appStore = configureStore({
   reducer: {
      home: homeSlice,
      gallery: gallerySlice,
      about: aboutSlice,
      menu: MenuSlice,
      image: Image_Slice,
      admission: Admission_Slice,
      auth: authSlice,
      socialLink: SocialLinkSlice,
      Payment: PaymentSlice,
   },
});
