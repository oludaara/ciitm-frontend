import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLandingPage } from '../store/homeSlice';
import axios from 'axios';
import {
   Album_EndPoint,
   frontend_EndPoint,
} from '../utils/constants';
import socket from '../config/socket.mjs';


const fetchData = async () => {
   try {
      const response = await axios.get(frontend_EndPoint);
      const data = response.data.data;
      dispatch(setLandingPage(data.landingPage));
   } catch (error) {
      console.error('Error fetching frontend data:', error);
   }
};




const useHomeUi = () => {
   const landingPage = useSelector(state => state.home.landingPage);
   const dispatch = useDispatch();

   if (socket.connected) {
      socket.connect();
   }

 


   useEffect(() => {


      socket.on('connect_error', error => {
         fetchData();
      });

      if (!landingPage) {


         socket.emit('requestFrontend')

         socket.on('frontend', data => {
       
            if (!data) {
               fetchData();
            }
      
            dispatch(setLandingPage(data.landingPage));
         });
      

      }

      return () => {
         socket.off('connect_error');
         socket.off('frontend');
      };
   }, [landingPage]);
};

export default useHomeUi;
