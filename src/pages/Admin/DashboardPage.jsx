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
      const handleDashboardData = (data) => {
         console.log('data from server DashBoard_Data', data);
         setCard(data?.DashBoard_Data || []);
      };
   
      // Connect socket if needed
      if (!socket.connected) {
         socket.connect();
      }
   
      // Attach listener BEFORE emitting request
      socket.on('DashBoard_Data', handleDashboardData);
   
   
      // Emit request after listener is attached
      socket.emit('Request_DashBoard_Data');
   
      // Clean up
      return () => {
         socket.off('DashBoard_Data', handleDashboardData);
      };
   },[]);
   

   return (
      <AdminTemplate pageName={'Dashboard'}>
         <DashboardCardSection Cards={Cards}  />

         <QuickLinkSection links={QuickLinkData} />
      </AdminTemplate>
   );
};

export default DashboardPage;
