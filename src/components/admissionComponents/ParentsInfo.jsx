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
        placeholder="Father's Name"
        type='text'
        name='fatherName'
        onChange={handleInputChange}
      />
      <InputField
        placeholder="Mother's Name"
        type='text'
        name='motherName'
        onChange={handleInputChange}
      />
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
      <InputField
        placeholder='Street'
        type='text'
        name='street'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='City'
        type='text'
        name='city'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='State'
        type='text'
        name='state'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Pin Code'
        type='number'
        name='pinCode'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Email'
        type='email'
        name='email'
        onChange={handleInputChange}
      />
      <Dropdown
        placeholder='Gender'
        name='gender'
        options={[
          'Male',
          'Female',
          'Rather not to say',
        ]}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ParentsInfo;
