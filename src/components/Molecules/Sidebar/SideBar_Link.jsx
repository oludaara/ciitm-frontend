import React from 'react';
import { Link } from 'react-router-dom';

const SideBar_Link = ({ link, icon, name, index }) => {
   return (
      <Link
         to={link}
         key={index}
         className='w-full h-[10%] flex items-center justify-start gap-[2vw] hover:bg-[#322F2F] rounded-xl p-[1vh]'
      >
         <div className='w-[5vh] h-[5vh] flex items-center justify-center text-[2vw] text-white'>
            {icon}
         </div>
         <div className='text-white text-[1.2vw]'>{name}</div>
      </Link>
   );
};

export default SideBar_Link;
