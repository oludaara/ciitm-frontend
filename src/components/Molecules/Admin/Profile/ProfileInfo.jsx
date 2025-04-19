import React from 'react';
import Input_Primary from '../../../Atoms/Input/Input_Primary';
import H3 from '../../../Atoms/Heading/H3';

const ProfileInfo = ({ admin }) => {
   return (
      <div className='Personal_Info_Container w-full h-[10%] flex flex-col items-center justify-center gap-[2.5vh]'>
         <H3 className='w-full text-left text-[1.1vw] font-semibold text-white bg-gradient-to-r from-[#3FEF9D] to-[#244737] bg-clip-text text-transparent ml-[2.5vw]'>
            Personal Info
         </H3>
         <Input_Primary
            className='w-[97%] h-[6vh] bg-black text-white rounded-lg px-[1.5vw]'
            Value={admin.name}
            Type={'text'}
            Placeholder='Name'
         />

         <Input_Primary
            className='w-[97%] h-[6vh] bg-black text-white rounded-lg px-[1.5vw]'
            Type={'text'}
            Placeholder='Email'
            Value={admin.email}
         />
      </div>
   );
};

export default ProfileInfo;
