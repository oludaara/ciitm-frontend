import React from 'react';
import PropTypes from 'prop-types';

const H4 = ({ children, Tailwind_utility_Class }) => {
   const defaultClass =
      'heading_3 max-[400px]:text-[6.5vw] text-[5.5vw] min-[768px]:text-2xl  lg:text-[3w]  md:text-[1.5vw] lg:font-[700]';

   return (
      <h4 className={Tailwind_utility_Class || defaultClass}>
         {children}
      </h4>
   );
};

H4.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default H4;
