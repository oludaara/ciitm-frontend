import React from 'react';
import Nav_UserCard from '../../../Molecules/Cards/NavUserCard';
import Open_menu from '../../../Atoms/Icon/Open_menu';
import H3 from '../../../Atoms/Heading/H3';

const Admin_NavBar = ({ text }) => {
   return (
      <div className='h-[10vh] w-full flex justify-between items-center mb-[2vh] px-[3vw] max-[1046px]:fixed max-[1046px]:bg-black top-0 z-30'>
         <div className='Nav_Text_Container w-[25%] h-full flex justify-end items-center'>
            <H3
               Tailwind_utility_Class={
                  'text-white text-[1.1vw] max-[1046px]:hidden font-semibold'
               }
            >
               {text ? text : 'Admin Panel'}
            </H3>
         </div>

         <Nav_UserCard textClassName='text-[0.9vw] text-white font-semibold' />
         <Open_menu />
      </div>
   );
};

export default Admin_NavBar;
