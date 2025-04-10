import React from 'react';
import PropTypes from 'prop-types';

const H4 = ({ children, Tailwind_utility_Class }) => {
  const defaultClass = 'text-[2.5vw] max-[400px]:text-[4vw] md:text-[1.6vw] font-medium leading-snug';

  return <h4 className={Tailwind_utility_Class || defaultClass}>{children}</h4>;
};

H4.propTypes = {
  children: PropTypes.string.isRequired,
  Tailwind_utility_Class: PropTypes.string,
};

export default H4;
