import React from 'react';
import TitleContainer from './TitleContainer';
import Input from './Input';

const StudentInfo = () => {
   return (
      <div className='w-full bg-[#FAFAFA]  border-2 border-[#D7D7D79E] rounded-md flex flex-col pb-[3vh]'>
         <TitleContainer title={'Student Information'} />
         <div className='flex flex-wrap gap-y-[3vh]'>
            <Input
               Name={'Student Id'}
               Placeholder={'Student Id'}
               Label={'Student Id'}
            />
            <Input
               Name={'Email'}
               Placeholder={'Your Gmail'}
               Label={'Email'}
            />
            <Input
               Name={'Phone'}
               Placeholder={'Your Number'}
               Label={'Number'}
            />

            <Input
               Name={'FatherName'}
               Placeholder={'Your Father Name'}
               Label={'Father Name'}
            />
         </div>
      </div>
   );
};

export default StudentInfo;
