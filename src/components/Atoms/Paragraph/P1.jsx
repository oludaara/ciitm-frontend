import React from 'react';
import PropTypes from 'prop-types';

const P1 = ({ text, Tailwind_utility_Class }) => {
  const defaultClass = 'text-[2.2vw] max-[400px]:text-[4.5vw] md:text-[1.6vw] leading-relaxed';

  return <p className={Tailwind_utility_Class || defaultClass}>{text}</p>;
};

P1.propTypes = {
  text: PropTypes.string.isRequired,
  Tailwind_utility_Class: PropTypes.string,
};

export default P1;
