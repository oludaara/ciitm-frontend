import React from 'react';
import PropTypes from 'prop-types';

const P4 = ({ text, Tailwind_utility_Class }) => {
  const defaultClass = 'text-[1.2vw] max-[400px]:text-[3vw] md:text-[1vw] leading-relaxed';

  return <p className={Tailwind_utility_Class || defaultClass}>{text}</p>;
};

P4.propTypes = {
  text: PropTypes.string.isRequired,
  Tailwind_utility_Class: PropTypes.string,
};

export default P4;
