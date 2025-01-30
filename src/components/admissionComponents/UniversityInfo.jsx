import React from 'react';
import InputField from './InputField';
import Dropdown from './DropDown';

const UniversityInfo = ({
  handleInputChange,
}) => {
  return (
    <div className='sm:grid flex flex-col w-full 2xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-10'>
      <InputField
        placeholder='University Name'
        type='text'
        name='universityName'
        onChange={handleInputChange}
      />

      <Dropdown
        placeholder='Degree Type'
        name='degreeType'
        options={[
          'Undergraduate',
          'Masters',
          'PhD',
          'Other',
        ]}
        onChange={handleInputChange}
      />

      <InputField
        placeholder='Course Name'
        type='text'
        name='courseName'
        onChange={handleInputChange}
      />

      <InputField
        placeholder='Start Date'
        type='date'
        name='startDate'
        onChange={handleInputChange}
      />

      <InputField
        placeholder='End Date'
        type='date'
        name='endDate'
        onChange={handleInputChange}
      />

      <InputField
        placeholder='GPA'
        type='number'
        name='gpa'
        onChange={handleInputChange}
        step='0.1'
        min='0'
        max='4.0'
      />

      <Dropdown
        placeholder='Graduation Status'
        name='graduationStatus'
        options={[
          'Graduated',
          'In Progress',
          'Dropped Out',
          'Not Applicable',
        ]}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UniversityInfo;
