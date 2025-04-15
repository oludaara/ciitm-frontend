import React from 'react';

const Input_Primary = ({
   Type,
   PlaceHolder,
   Value,
   ReadOnly = false,
   InputClassName,
}) => {
   return (
      <input
         type={Type}
         readOnly={ReadOnly}
         placeholder={PlaceHolder}
         value={Value}
         className={InputClassName}
      />
   );
};

export default Input_Primary;
