import React from 'react';
import PropTypes from 'prop-types';

const H5 = ({ children, Tailwind_utility_Class }) => {
  const defaultClass = 'text-[2vw] max-[400px]:text-[3.5vw] md:text-[1.3vw] font-normal leading-normal';

  return <h5 className={Tailwind_utility_Class || defaultClass}>{children}</h5>;
};

H5.propTypes = {
  children: PropTypes.string.isRequired,
  Tailwind_utility_Class: PropTypes.string,
};

export default H5;
