import React, { memo } from 'react';
import AdminDashBoard_CardPrimary from './AdminDashBoard_CardPrimary';

const DashboardCardSection = memo(({ Cards = []}) => {

   if(Cards?.length === 0){
      return (
         <div className='w-full h-auto flex items-center justify-center'>
            <h1 className='text-2xl text-center text-white'>No Card Found</h1>
         </div>
      );
   }
   return (


      <div className=' bg-black w-full  h-fit flex flex-col'>
         <div className='Card_Container  flex gap-[2vw] w-full max-[376px]:justify-center max-[1300px]:items-center flex-wrap px-[3vw]'>
            {Cards.map((card, index) => (
               <AdminDashBoard_CardPrimary
                  key={index}
                  title={card?.name}
                  value={card?.value}
                  icon={
                     <img
                        src={card?.icon}
                        alt={card?.name}
                        className='w-[60%] h-[60%] object-contain'
                     />
                  }
               />
            ))}
         </div>
      </div>
   );
});

export default DashboardCardSection;
