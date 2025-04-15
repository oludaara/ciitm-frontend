import React from 'react';
import Input_Primary from '../../Atoms/Input/Input_Primary';
import Link_btn from '../../Atoms/Button/Link_btn';

const AdminInputContact_View = ({ data }) => {
   return (
      <div className='flex flex-col w-[95%] gap-[2vh] mt-[3vh]'>
         <Input_Primary
            Type='text'
            PlaceHolder='Name'
            ReadOnly={true}
            Value={data.cName}
            InputClassName='w-full bg-black border-2 border-white rounded-md text-[#C7C0C0] h-[10vh] p-[1vh] text-[1.2vw] pl-[2vw]'
         />
         <Input_Primary
            Type='text'
            PlaceHolder='Email'
            Value={data.cEmail}
            ReadOnly={true}
            InputClassName='w-full bg-black border-2 border-white rounded-md text-[#C7C0C0] h-[10vh] p-[1vh] text-[1.2vw] pl-[2vw]'
         />
         <Input_Primary
            Type='text'
            PlaceHolder='Mobile Number'
            ReadOnly={true}
            Value={data.cNumber}
            InputClassName='w-full bg-black border-2 border-white rounded-md text-[#C7C0C0] h-[10vh] p-[1vh] text-[1.2vw] pl-[2vw]'
         />
         <Input_Primary
            Type='text'
            PlaceHolder='Message'
            ReadOnly={true}
            Value={data.cMessage}
            InputClassName='w-full bg-black border-2 border-white rounded-md text-[#C7C0C0] h-[20vh] p-[1vh] text-[1.2vw] pl-[2vw]'
         />

         <Link_btn link={'/admin/contact'} buttonText={'Back'} />
       
      </div>
   );
};

export default AdminInputContact_View;
