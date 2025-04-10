import React from 'react';
import PropTypes from 'prop-types';

const H3 = ({ children, Tailwind_utility_Class }) => {
  const defaultClass = 'text-[3vw] max-[400px]:text-[5vw] md:text-[2vw] font-semibold leading-tight';

  return <h3 className={Tailwind_utility_Class || defaultClass}>{children}</h3>;
};

H3.propTypes = {
  children: PropTypes.string.isRequired,
  Tailwind_utility_Class: PropTypes.string,
};

export default H3;
