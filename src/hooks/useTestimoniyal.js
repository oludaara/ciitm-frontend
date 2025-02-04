import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTestimonital } from '../store/homeSlice';
import axios from 'axios';
import { Testimonital_EndPoint } from '../utils/constants';

const useTestimonial = () => {
   let Testimonital = useSelector(state => state.home.Testimonital);

   let dispatch = useDispatch();
   const handleTestimonial = async () => {
      try {
         if (!Testimonital) {
            const response = await axios.get(Testimonital_EndPoint);
            dispatch(setTestimonital(response.data.Find_Testimonial));
         }
         // setTestimonials(data)
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      handleTestimonial();
   }, []);
};

export default useTestimonial;
