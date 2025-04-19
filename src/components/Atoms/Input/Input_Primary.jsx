import React, { useState } from 'react';

const Input_Primary = ({
   Type,
   PlaceHolder,
   Value,
   ReadOnly = false,
   className,
}) => {
   const [Data, setData] = useState(Value);
   return (
      <input
         type={Type}
         readOnly={ReadOnly}
         placeholder={PlaceHolder}
         value={Data}
         {...(ReadOnly
            ? {}
            : { onChange: e => setData(e.target.value) })}
         className={className}
      />
   );
};

export default Input_Primary;
