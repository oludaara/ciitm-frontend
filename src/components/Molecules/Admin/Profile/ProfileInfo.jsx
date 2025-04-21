import React, { memo, useEffect, useState } from 'react';
import Input_Primary from '../../../Atoms/Input/Input_Primary';
import H3 from '../../../Atoms/Heading/H3';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ProfileInfo = memo(({ admin }) => {
   let [ReadOnlyValue, setReadOnlyValue] = useState(true);
   const data = useSelector(state => state.Input.inputs);


  




   useEffect(() => {

      if(data.length > 0) {
         
         const ReadOnly = data.find(input => input.name === 'Profile_Edit').value;
         setReadOnlyValue(ReadOnly);
       
    
      }



      // if(inputs.)
      // const ReadOnly = inputs.find(
      //    input => input.name === 'Profile_Edit',
      // ).value;
      // setReadOnlyValue(ReadOnly);

   }, [data]);

   return (
      <div className='Personal_Info_Container w-full h-[10%] flex flex-col items-center justify-center gap-[2.5vh]'>
         <H3 className='w-full text-left text-[1.1vw] font-semibold text-white bg-gradient-to-r from-[#3FEF9D] to-[#244737] bg-clip-text text-transparent ml-[2.5vw]'>
            Personal Info
         </H3>
         <Input_Primary
            className='w-[97%] h-[6vh] bg-black text-white rounded-lg px-[1.5vw] focus:outline-none focus:ring-1 focus:ring-[#3FEF9D] focus:border-transparent'
            name={'Personal_Name'}
            PlaceHolder='Your Name'
            ReadOnly={ReadOnlyValue}
            Value={admin.name}
         />
     

         <Input_Primary
            className='w-[97%] h-[6vh] bg-black text-white rounded-lg px-[1.5vw] focus:outline-none focus:ring-1 focus:ring-[#3FEF9D] focus:border-transparent'
            name={'Personal_Email'}
            PlaceHolder='Your Email'
            ReadOnly={ReadOnlyValue}
            Value={admin.email}
         />
      </div>
   );
});

export default ProfileInfo;
