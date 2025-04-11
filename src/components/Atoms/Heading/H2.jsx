import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({ children, Tailwind_utility_Class }) => {
   const defaultClass =
      'heading_2 max-[400px]:text-[8vw] text-[7.5vw] min-[768px]:text-4xl  lg:text-[4vw]  md:text-[3.5vw] lg:font-[700] ';

   return (
      <h2 className={Tailwind_utility_Class || defaultClass}>
         {children}
      </h2>
   );
};

H2.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default H2;
