import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   setLandingPage,
   setTestimonital,
   setAlbum,
} from '../store/homeSlice';
import axios from 'axios';
import {
   Album_EndPoint,
   frontend_EndPoint,
} from '../utils/constants';

const useHomeUi = () => {
   let landingPage = useSelector(state => state.home.landingPage);

   let dispatch = useDispatch();

   const fetchData = async () => {
      try {
         if (!landingPage) {
            const response = await axios.get(frontend_EndPoint);
            let data = response.data.data[0];
            dispatch(setLandingPage(data.landingPage));
         }
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);
};

export default useHomeUi;
