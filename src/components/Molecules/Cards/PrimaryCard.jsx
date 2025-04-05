import React from 'react';

import P2 from '../../Atoms/Paragraph/P2';
import P1 from '../../Atoms/Paragraph/P1';
import H2 from '../../Atoms/Heading/H2';
import H1 from '../../Atoms/Heading/H1';

const Card_primary = ({ title, value, Image_Src }) => {
   return (
      <div className='w-[20vw]  max-[1300px]:w-[30vw]  max-[1300px]:h-[18vh] h-[15vh]  bg-[#1C1C1C] rounded-lg flex'>
         <div className='Image_Container h-full  w-[25%] flex items-center justify-center max-[1300px]:w-full'>
            <img
               src={Image_Src}
               alt=''
               srcset=''
               className='h-[45%] w-[60%] object-cover'
            />
         </div>

         <div className='Text_Container h-full w-[75%] flex flex-col justify-center'>
            <div className='text-white text-[1.5vw]'>
               <H1 text={value} />
            </div>
            <div className='text-white text-[1vw]'>
               <P2 text={title} />
            </div>
         </div>
      </div>
   );
};

export default Card_primary;
