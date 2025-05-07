import React, { useEffect, useState } from 'react';
import AdminTemplate from '../../components/Templates/Admin/AdminTemplate';

import QuickLinkSection from '../../components/Organisms/Admin/QuickLinkSection';
import DashboardCardSection from '../../components/Molecules/Admin/Dashboard/DashboardCardSection';
import socket from '../../config/socket.mjs';

// const cards = [
//    {
//       title: 'Total Earnings',
//       value: '₹ 2,00,000',
//       image: 'https://www.pngmart.com/files/7/Earnings-PNG-Photos.png',
//    },
//    {
//       title: 'Total Students',
//       value: '1000',
//       image: 'https://cdn4.iconfinder.com/data/icons/people-40/48/student_female-1024.png',
//    },
//    {
//       title: 'Total Contacts',
//       value: '100',
//       image: 'https://icon-library.com/images/contact-app-icon/contact-app-icon-12.jpg',
//    },
//    {
//       title: 'Total Images',
//       value: '110',
//       image: 'http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png',
//    },
// ];

let QuickLinkData = [
   {
      path: '/admin/DashBoard',
      text: 'Dashboard',
   },
   {
      path: '/admin/Contact',
      text: 'Contact',
   },
];

const DashboardPage = () => {

   const [Cards, setCard] = useState()


   useEffect(() => {

      if(!socket.connected){
         socket.connect();
      }


     socket.emit('Request_DashBoard_Data');

      socket.on('DashBoard_Data', data => {
         console.log('data from server dashBoard Data', data);

         let DashBoard_Data = data?.DashBoard_Data;

         setCard(DashBoard_Data);
        
      });

      console.log('Cards', Cards);
      return () => {
         socket.off('DashBoard_Data');
      };

   }, []);

   return (
      <AdminTemplate pageName={'Dashboard'}>
         <DashboardCardSection cards={Cards} />

         <QuickLinkSection links={QuickLinkData} />
      </AdminTemplate>
   );
};

export default DashboardPage;
