import React from 'react';
import TableRow from '../../Atoms/Table/Tr/TableRow';
import TableHeading from '../../Atoms/Table/Th/TableHeading';

const TableRow_Heading = ({
   TableHeadingArray = [],
   TableRowClassName,
   TableHeadingClassName,
}) => {
   {
      if (TableHeadingArray.length < 0) {
         return (
            <h1 className='text-center text-white'>
               Please Pass Table Array
            </h1>
         );
      }
   }
   return (
      <TableRow Tailwind_utility_Class={TableRowClassName}>
         {TableHeadingArray.map((data, index) => (
            <TableHeading
               key={index}
               Tailwind_utility_Class={TableHeadingClassName}
            >
               {data}
               {console.log(data)}
            </TableHeading>
         ))}
      </TableRow>
   );
};

export default TableRow_Heading;

// {`text-[0.9vw] w-[${
//     100 / TableHeadingArray.length
//  }%] text-center text-center align-middle  border-[#322F2F]`}
