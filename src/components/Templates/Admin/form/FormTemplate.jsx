import React from 'react';

const FormTemplate = ({ children }) => {
   return (
      <div className='w-[94%] max-[553px]:w-[98%] h-[80%] flex flex-col items-center  bg-[#1C1C1C] justify-between'>
         <table className='w-full h-auto bg-[#1C1C1C] rounded-lg table-fixed'>
            {children}
         </table>
         <div className='w-full h-[8vh] bg-[#090909]'></div>
      </div>
   );
};

export default FormTemplate;
