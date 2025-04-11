import React from 'react';
import PropTypes from 'prop-types';

const H6 = ({ children, Tailwind_utility_Class }) => {
   const defaultClass =
      'text-[1.5vw] max-[400px]:text-[3vw] md:text-[1vw] font-normal leading-normal';

   return (
      <h5 className={Tailwind_utility_Class || defaultClass}>
         {children}
      </h5>
   );
};

H6.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default H6;
