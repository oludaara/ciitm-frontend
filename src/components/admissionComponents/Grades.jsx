import React from 'react';
import InputField from './InputField';
import Dropdown from './DropDown';

const Grades = ({
  handleInputChange,
}) => {
  return (
    <div className='sm:grid flex flex-col w-full 2xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-10'>
      <InputField
        placeholder='Subject 1'
        type='text'
        name='subject1'
        onChange={handleInputChange}
      />
      <Dropdown
        placeholder='Grade for Subject 1'
        name='grade1'
        options={[
          'A',
          'B',
          'C',
          'D',
          'F',
        ]}
        onChange={handleInputChange}
      />

      <InputField
        placeholder='Subject 2'
        type='text'
        name='subject2'
        onChange={handleInputChange}
      />
      <Dropdown
        placeholder='Grade for Subject 2'
        name='grade2'
        options={[
          'A',
          'B',
          'C',
          'D',
          'F',
        ]}
        onChange={handleInputChange}
      />

      <InputField
        placeholder='Subject 3'
        type='text'
        name='subject3'
        onChange={handleInputChange}
      />
      <Dropdown
        placeholder='Grade for Subject 3'
        name='grade3'
        options={[
          'A',
          'B',
          'C',
          'D',
          'F',
        ]}
        onChange={handleInputChange}
      />

      <InputField
        placeholder='Subject 4'
        type='text'
        name='subject4'
        onChange={handleInputChange}
      />
      <Dropdown
        placeholder='Grade for Subject 4'
        name='grade4'
        options={[
          'A',
          'B',
          'C',
          'D',
          'F',
        ]}
        onChange={handleInputChange}
      />

      <InputField
        placeholder='Subject 5'
        type='text'
        name='subject5'
        onChange={handleInputChange}
      />
      <Dropdown
        placeholder='Grade for Subject 5'
        name='grade5'
        options={[
          'A',
          'B',
          'C',
          'D',
          'F',
        ]}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Grades;
