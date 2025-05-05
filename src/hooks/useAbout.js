import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAboutPage } from '../store/AboutSlice';
import axios from 'axios';
import { frontend_EndPoint } from '../utils/constants';
import socket from '../config/socket.mjs';

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
      socket.on('connect_error', error => {
         fetchAlbum();
      });

      socket.on('frontend', data => {
         if (!data) {
            fetchAlbum();
         }
         dispatch(setAboutPage(data.aboutPage));
      });
   }, []);
};

export default useAbout;
