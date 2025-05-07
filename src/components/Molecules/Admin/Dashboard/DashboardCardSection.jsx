import React from 'react';
import AdminDashBoard_CardPrimary from './AdminDashBoard_CardPrimary';

const DashboardCardSection = React.memo(({ cards }) => {
   return (
      <div className=' bg-black w-full  h-fit flex flex-col'>
         <div className='Card_Container  flex gap-[2vw] w-full max-[376px]:justify-center max-[1300px]:items-center flex-wrap px-[3vw]'>
            {cards.map((card, index) => (
               <AdminDashBoard_CardPrimary
                  key={index}
                  title={card.name}
                  value={card.value}
                  icon={
                     <img
                        src={card.icon}
                        alt={card.title}
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
