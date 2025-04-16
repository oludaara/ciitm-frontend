import React from 'react';
import PropTypes from 'prop-types';

const H3 = ({ children, Tailwind_utility_Class }) => {
   return (
      <h3 className={`heading-3 ${Tailwind_utility_Class}`}>
         {children}
      </h3>
   );
};

H3.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default H3;
