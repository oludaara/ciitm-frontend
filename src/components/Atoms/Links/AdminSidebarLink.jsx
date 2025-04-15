import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdminSidebarLink = React.memo(
   ({
      link,
      icon,
      name,
      LinkClassName = 'w-full  flex items-center justify-start gap-[2vw] hover:bg-[#322F2F] rounded-xl px-[1vh] py-[1vh] md:mt-0 ',
   }) => {
      return (
         <Link to={link} className={LinkClassName}>
            <div className='w-[5vh] h-[5vh] flex  items-center justify-center text-[3vw] md:text-[2vw]  text-white'>
               {icon}
            </div>
            <div className='text-white text-[2vw] md:text-[1.2vw]'>
               {name}
            </div>
         </Link>
      );
   },
);

// ✅ You can still use PropTypes
AdminSidebarLink.propTypes = {
   link: PropTypes.string.isRequired,
   icon: PropTypes.node.isRequired,
   name: PropTypes.string.isRequired,
   LinkClassName: PropTypes.string,
};

export default AdminSidebarLink;
