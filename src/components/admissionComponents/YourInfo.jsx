import React, { useState } from 'react';
import InputField from './InputField';
import Dropdown from './DropDown';

const YourInfo = ({
  formData,
  handleInputChange,
}) => {
  const [activeBox, setActiveBox] =
    useState(null);

  return (
    <div className='sm:grid flex flex-col w-full 2xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-10'>
      <InputField
        placeholder='First Name'
        type='text'
        name='firstName'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Middle Name'
        type='text'
        name='middleName'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Last Name'
        type='text'
        name='lastName'
        onChange={handleInputChange}
      />
      <InputField
        placeholder="Father's Name"
        type='text'
        name='fathersName'
        onChange={handleInputChange}
      />
      <InputField
        placeholder="Mother's Name"
        type='text'
        name='mothersName'
        onChange={handleInputChange}
      />

      <InputField
        placeholder='Aadhar Number'
        type='number'
        name='AadharCardNumber'
        onChange={handleInputChange}
      />
   
      <InputField
        placeholder='Email'
        type='email'
        name='email'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Contact No'
        type='tel'
        name='contactNo'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Date of Birth'
        type='date'
        name='dateOfBirth'
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
   

    </div>
  );
};

export default YourInfo;
