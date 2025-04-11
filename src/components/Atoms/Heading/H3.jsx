import React from 'react';
import PropTypes from 'prop-types';

const H3 = ({ children, Tailwind_utility_Class }) => {
   const defaultClass =
      'heading_3 max-[400px]:text-[7vw] text-[6vw] min-[768px]:text-3xl  lg:text-[3.5w]  md:text-[2vw] lg:font-[700]';

   return (
      <h3 className={Tailwind_utility_Class || defaultClass}>
         {children}
      </h3>
   );
};

H3.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default H3;
