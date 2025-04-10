import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({ children, Tailwind_utility_Class }) => {
  const defaultClass = 'text-[4.5vw] max-[400px]:text-[7vw] md:text-[3vw] font-bold leading-snug';

  return <h2 className={Tailwind_utility_Class || defaultClass}>{children}</h2>;
};

H2.propTypes = {
  children: PropTypes.string.isRequired,
  Tailwind_utility_Class: PropTypes.string,
};

export default H2;
