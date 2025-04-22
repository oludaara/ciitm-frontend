import React from 'react';

const FormTemplate = ({ children, Navigator = true }) => {
   return (
      <div className='w-[94%]   max-[553px]:w-[95%] h-[90%] flex flex-col items-center  bg-[#1C1C1C] justify-between rounded-bl-2xl rounded-br-2xl border  border-[#322F2F]'>
         <table className='w-full h-auto bg-[#1C1C1C]  table-fixed '>
            {children}
         </table>
         {Navigator && (
            <div className='w-full h-[8vh] bg-[#090909] rounded-bl-2xl rounded-br-2xl'></div>
         )}
      </div>
   );
};

export default FormTemplate;
