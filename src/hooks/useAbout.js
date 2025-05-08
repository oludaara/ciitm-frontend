import socket from '../config/socket.mjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAboutPage } from '../store/AboutSlice';
import axios from 'axios';
import { frontend_EndPoint } from '../utils/constants';

const useAbout = () => {
   let About = useSelector(state => state.about.aboutPage);

   let dispatch = useDispatch();

   const fetchData = async () => {
      try {
         if (!About) {
            const response = await axios.get(frontend_EndPoint);

            let data = response.data.data;

            dispatch(setAboutPage(data.aboutPage));
         }
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      if (!socket.connected) {
         socket.connect();
      }
   
      const handleConnectError = error => {
         console.log('Socket connection error:', error);
         fetchData();
      };

   
      const handleFrontendData = data => {
         console.log('data from server frontend', data);
         if (!data) {
            fetchData();
         } else {
            dispatch(setAboutPage(data.aboutPage));
         }


      };
   
      socket.on('connect_error', handleConnectError);
      
      if (!About) {
         socket.emit('requestFrontend')
         socket.on('frontend', handleFrontendData);
      
      }
 
      return () => {
         socket.off('connect_error', handleConnectError);
         socket.off('frontend', handleFrontendData);
      };
   }, [About, dispatch]);
};

export default useAbout;
