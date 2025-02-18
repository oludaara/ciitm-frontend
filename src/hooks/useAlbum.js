import { useEffect } from 'react';
import { setAlbum } from '../store/homeSlice';

import { Album_EndPoint } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const useAlbum = () => {
   let Album = useSelector(state => state.home.Album);

   let dispatch = useDispatch();

   const Handle_Album = async () => {
      try {
         if (!Album) {
            const response = await axios.get(Album_EndPoint);
            dispatch(setAlbum(response.data));
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      Handle_Album();
   }, []);
};

export default useAlbum;
