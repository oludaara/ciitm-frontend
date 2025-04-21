import React, { useState } from 'react';
import Input_Primary from '../../../Atoms/Input/Input_Primary';

const Social_Input = ({
   Icon,
   LinkUrl,
   PlaceHolder,
   ReadOnly = false,
}) => {
   const [Link, setLink] = useState(LinkUrl);
   return (
      <div className='Social_LinkContainer flex w-[97%] h-[6vh] bg-black text-white rounded-lg  mt-[1vh] ml-[1vw]'>
         <div className='Link_Logo_Container w-[8%] h-full flex items-center justify-center bg-white rounded-l-lg  text-black text-[2.6vw] '>
            {Icon}
         </div>
         <div className='Input_Container w-[92%] h-full flex items-center justify-center'>
            <Input_Primary
               Type={'text'}
               className='w-full h-full bg-black text-white rounded-lg px-[1.5vw] focus:outline-none focus:ring-1 focus:ring-[#3FEF9D] focus:border-transparent'
               Value={Link}
               ReadOnly={ReadOnly}
               onChange={e => setLink(e.target.value)}
               PlaceHolder={PlaceHolder}
            />
         </div>
      </div>
   );
};

export default Social_Input;
