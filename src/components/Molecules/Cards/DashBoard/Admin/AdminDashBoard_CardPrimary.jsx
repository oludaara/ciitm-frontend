import React from 'react';
import PropTypes from 'prop-types';

const AdminDashBoard_CardPrimary = React.memo(
   ({
      title,
      value,
      icon,
      containerClassName = 'flex p-4 rounded-lg shadow-md w-[20vw] h-[15vh] bg-[#1C1C1C] hover:scale-105 transition-transform duration-300 ease-in-out',
      iconContainerClassName = 'flex items-center justify-center w-[30%] h-full  bg-opacity-20 mb-2',
      textContainerClassName = 'flex flex-col justify-center text-white w-[70%] px-4',
   }) => {
      console.log('AdminDashBoard_CardPrimary rendered');
      return (
         <div className={`Admin_cardContainer ${containerClassName}`}>
            <div
               className={`Icon_Container ${iconContainerClassName}`}
            >
               {icon}
            </div>

            <div
               className={`TextContainer ${textContainerClassName}`}
            >
               <h3 className='text-lg font-semibold'>{title}</h3>
               <p className='text-2xl font-bold'>{value}</p>
            </div>
         </div>
      );
   },
);

AdminDashBoard_CardPrimary.displayName = 'AdminDashBoard_CardPrimary';

AdminDashBoard_CardPrimary.propTypes = {
   title: PropTypes.string.isRequired,
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
   icon: PropTypes.node.isRequired,
   containerClassName: PropTypes.string,
   iconContainerClassName: PropTypes.string,
   textContainerClassName: PropTypes.string,
};

export default AdminDashBoard_CardPrimary;
