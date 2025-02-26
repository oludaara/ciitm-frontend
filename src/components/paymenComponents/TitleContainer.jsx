import React from 'react';

const TitleContainer = ({ title }) => {
   return (
      <div className='bg-white h-[8vh] flex items-center mb-[4vh]'>
         <h2 className='ml-[1.5vw] text-[1.5vw] font-bold text-[#333333]'>
            {title}
         </h2>
      </div>
   );
};

export default TitleContainer;
