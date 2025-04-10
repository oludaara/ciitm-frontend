import React from 'react';
import PropTypes from 'prop-types';

const P3 = ({ text, Tailwind_utility_Class }) => {
  const defaultClass = 'text-[1.5vw] max-[400px]:text-[3.5vw] md:text-[1.2vw] leading-relaxed';

  return <p className={Tailwind_utility_Class || defaultClass}>{text}</p>;
};

P3.propTypes = {
  text: PropTypes.string.isRequired,
  Tailwind_utility_Class: PropTypes.string,
};

export default P3;
