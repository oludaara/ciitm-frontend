import React from 'react';
import PropTypes from 'prop-types';

const H4 = ({ children, Tailwind_utility_Class }) => {
   return (
      <h4 className={`heading-4 ${Tailwind_utility_Class}`}>
         {children}
      </h4>
   );
};

H4.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default H4;
