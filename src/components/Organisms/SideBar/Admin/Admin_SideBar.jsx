import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiHomeSmile } from 'react-icons/bi';
import { TbPigMoney } from 'react-icons/tb';
import { SiCoursera } from 'react-icons/si';
import { useGSAP } from '@gsap/react';
import { FaImage } from 'react-icons/fa';
import gsap from 'gsap';
import { GoBellFill } from 'react-icons/go';
import { PiStudentBold } from 'react-icons/pi';
import AdminSidebarLink from '../../../Atoms/Links/AdminSidebarLink';

let Links = [
   {
      name: 'Home',
      link: '/admin/DashBoard',
      icon: <BiHomeSmile />,
   },

   {
      name: 'Earnings',
      link: '/admin/Earnings',
      icon: <TbPigMoney />,
   },
   {
      name: 'Notifications',
      link: '/admin/Notifications',
      icon: <GoBellFill />,
   },

   {
      name: 'Students',
      link: '/admin/Students',
      icon: <PiStudentBold />,
   },

   {
      name: 'Courses',
      link: '/admin/Courses',
      icon: <SiCoursera />,
   },
   {
      name: 'Image',
      link: '/admin/create/Image',
      icon: <FaImage />,
   },
];

const Admin_SideBar = () => {
   const menu = useSelector(state => state.menu.menu);

   const dispatch = useDispatch();
   let sideBar = useRef();

   let Handle_SideBar_Close = () => {
      gsap.to('.Side_bar', {
         y: '-9vh',
         duration: 0.5,
      });
   };

   let Handle_SideBar_Open = () => {
      console.log('SideBar Open', menu);
      gsap.to('.Side_bar', {
         y: '90vh',
         display: 'flex',
         duration: 0.5,
      });
   };

   useEffect(() => {
      gsap.registerPlugin(useGSAP);
      if (menu === true) {
         Handle_SideBar_Open();
      } else {
         Handle_SideBar_Close();
      }
   }, [menu]);

   return (
      <div className='Side_bar max-[1046px]:hidden  w-[25%] max-[1300px]:w-[35%] h-[80%] bg-[#1C1C1C] ml-[1.5vw] rounded-xl border border-[#322F2F] p-[2vw] flex item-center flex-col min-[1046px]:relative z-10 max-[1046px]:w-[100vw]  max-[1046px]:fixed max-[1046px]:top-[-81vh] max-[1046px]:left-0 max-[1046px]:h-[90vh] left-0 mt-[12.5vh]'>
         {/* <SideBar_UserCard /> */}

         <div className='w-full h-[70%] flex flex-col  mt-[4vh] gap-[2vh]'>
            {Links.map((link, index) => (
               <AdminSidebarLink
                  icon={link.icon}
                  link={link.link}
                  name={link.name}
                  key={index}
               />
            ))}
         </div>
      </div>
   );
};

export default Admin_SideBar;
