import Navbar from './components/Organisms/NavBar/User/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './components/Organisms/Footer/Footer.jsx';

import useHomeUi from './hooks/useHomeUi.js';

const Body = () => {
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
