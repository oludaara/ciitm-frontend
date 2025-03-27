import React from 'react';

const Circle_Image = ({ src, alt, fn }) => {
   return (
      <div className='w-full h-full flex items-center justify-center'>
         <img
            src={src}
            alt={alt}
            onError={fn}
            className='w-full h-full object-cover rounded-full'
         />
      </div>
   );
};

export default Circle_Image;
