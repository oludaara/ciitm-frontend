import React from 'react';

const TextAreaPrimary = ({
  placeholder,
  value,
  readOnly = false,
  className,
}) => {
  return (
    <textarea
      readOnly={readOnly}
      placeholder={placeholder}
      value={value}
      className={className}
    />
  );
};

export default TextAreaPrimary;


