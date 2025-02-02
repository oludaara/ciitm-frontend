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
        required={true}
        name='firstName'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Middle Name'
        type='text'
        name='middleName'
        required={false}
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Last Name'
        type='text'
        required={true}
        name='lastName'
        onChange={handleInputChange}
      />
      <InputField
        placeholder="Father's Name"
        type='text'
        required={true}
        name='fatherName'
        onChange={handleInputChange}
      />
      <InputField
        placeholder="Mother's Name"
        required={true}
        type='text'
        name='motherName'
        onChange={handleInputChange}
      />

      <InputField
        placeholder='Aadhar Number'
        required={true}
        type='number'
        name='AadharCardNumber'
        onChange={handleInputChange}
      />
   
      <InputField
        placeholder='Email'
        required={true}
        type='email'
        name='email'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Contact No'
        required={true}
        type='tel'
        name='contactNumber'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Date of Birth'
        required={true}
        type='date'
        name='dateOfBirth'
        onChange={handleInputChange}
      />

      <Dropdown
        placeholder='Gender'
        name='gender'
        required={true}
        options={[

          'Male',
          'Female',
          'Rather not to say',
        ]}
        onChange={handleInputChange}
      />

   
   <InputField
        placeholder='Street'
        required={true}
        type='text'
        name='street'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='City'
        required={true}
        type='text'
        name='city'
        onChange={handleInputChange}
      />
      <InputField
       required={true}
        placeholder='State'
        type='text'
        name='state'
        onChange={handleInputChange}
      />
      <InputField
        placeholder='Pin Code'
        required={true}
        type='number'
        name='pinCode'
        onChange={handleInputChange}
      />
   

    </div>
  );
};

export default YourInfo;
