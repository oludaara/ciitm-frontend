import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuickLink = ({ path, text }) => {
   return (
      <Link
         to={path}
         className='text-[2vw] w-[15vw]  md:text-[1vw] text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white inline  p-[0.6vw] md:w-[10vw]  border border-1 rounded-xl text-center'
      >
         {text}
      </Link>
   );
};

QuickLink.propTypes = {
   path: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
};

export default QuickLink;
