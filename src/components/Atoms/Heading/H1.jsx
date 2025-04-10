import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ children, Tailwind_utility_Class }) => {
  const defaultClass = 'max-[400px]:text-[8.5vw] text-[8vw] min-[768px]:text-5xl min-[768px]:w-[15ch] lg:text-[4vw] font-bold md:text-[4vw] md:w-[15ch] lg:font-[700] leading-tight w-[25vh] lg:w-fit';

  return <h1 className={Tailwind_utility_Class || defaultClass}>{children}</h1>;
};

H1.propTypes = {
  children: PropTypes.string.isRequired,
  Tailwind_utility_Class: PropTypes.string,
};

export default H1;
