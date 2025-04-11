import React from 'react';
import H1 from '../../Atoms/Heading/H1';
import Nav_UserCard from '../Cards/NavUserCard';
import Open_menu from '../../Atoms/Icon/Open_menu';

const Admin_NavBar = ({ text }) => {
   return (
      <div className='h-[10vh] w-full flex justify-between items-center mb-[2vh] px-[3vw] max-[1046px]:fixed max-[1046px]:bg-black top-0 z-30'>
         <div className='Nav_Text_Container w-[25%] h-full flex justify-end items-center'>
            <H1 text={text ? text : 'Admin'} />
         </div>

         <Nav_UserCard />
         <Open_menu />
      </div>
   );
};

export default Admin_NavBar;
