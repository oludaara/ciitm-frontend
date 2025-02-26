import React from 'react';

const Input = ({ Name, Placeholder, Label }) => {
   return (
      <div className='ml-[2vh] mr-[1vw]'>
         {Label && (
            <label htmlFor={Name}>
               <h1 className='text-[1vw] font-medium mb-[2vh]'>
                  {Label}
               </h1>
            </label>
         )}
         <input
            className='bg-white border-2 border-gray-200 rounded-lg p-4'
            type='text'
            name={Name}
            placeholder={Placeholder}
            id={Name}
         />
      </div>
   );
};

export default Input;
