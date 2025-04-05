import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useGallery } from '../../../hooks/useGallery';
import GalleryCard from './GalleryCard';

const Gallery = () => {
   let gallery = useSelector(state => state.gallery);
   let [image, setImage] = useState([]);
   console.log('Gallery', gallery);

   useGallery();

   useEffect(() => {
      setImage(gallery);
   }, [gallery]);

   return (
      <div className='max-w-screen h-full flex flex-wrap items-center justify-center bg-[#f5f1f1] gap-[2vw] max-[421px]:gap-[4vw] py-[15vh] px-[2vw] max-[421px]:px-[4vw] shrink'>
         {image.map((img, index) => {
            return <GalleryCard key={index} url={img.url} />;
         })}
      </div>
   );
};

export default Gallery;
