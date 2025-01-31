import React, { useState } from 'react';
import InputField from './InputField';
import Dropdown from './DropDown';

const ParentsInfo = ({
  handleInputChange,
}) => {
  const [activeBox, setActiveBox] =
    useState(null);

  return (
    <div className='sm:grid flex flex-col w-full 2xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-10'>
    
   
      <InputField
        placeholder="Guardian's Name"
        type='text'
        name='Gname'
        onChange={handleInputChange}
      />
      <Dropdown
        placeholder="Guardian's Relation"
        name='Grelation'
        options={[
          'Father',
          'Mother',
          'Other',
        ]}
        onChange={handleInputChange}
      />
      <InputField
        placeholder="Guardian's Contact Number"
        type='number'
        name='GcontactNumber'
        onChange={handleInputChange}
      />


    </div>
  );
};

export default ParentsInfo;
