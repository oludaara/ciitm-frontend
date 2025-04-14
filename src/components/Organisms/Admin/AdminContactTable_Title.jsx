import React from 'react';
import TableRow_Heading from '../../Molecules/table/TableRow_Heading';

let TableHeading_Data = [
   'S.no',
   'Name',
   'Email',
   'Mobile Number',
   'Actions',
];

const AdminContactTable_Title = () => {
   return (
      <TableRow_Heading
         TableHeadingArray={TableHeading_Data}
         TableHeadingClassName='text-white font-bold bg-[#090909] w-full h-[7vh]'
      />
   );
};

export default AdminContactTable_Title;
