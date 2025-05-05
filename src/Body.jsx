import Navbar from './components/Organisms/NavBar/User/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './components/Organisms/Footer/Footer.jsx';

import useHomeUi from './hooks/useHomeUi.js';
import socket from './config/socket.mjs';
import { useEffect } from 'react';

const Body = () => {
   useEffect(() => {
      if (!socket.connected) {
         socket.on('connect', () => {
            console.log('✅ Connected to server');
         });
      }

      return () => {
         socket.off('movie/welcome'); // remove listener
      };
   }, []);

   useHomeUi();

   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default Body;
