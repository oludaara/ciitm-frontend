import React from 'react';
import TableRow from '../../Atoms/Table/Tr/TableRow';
import TableData from '../../Atoms/Table/Td/TableData';

const TableRow_Data = ({
   TableDataArray = [],
   TableDataClassName = '',
   TableRowClassName = '',
}) => {

   {
      console.log('TableDataArray', TableDataArray);
   }

   {
      if (TableDataArray.length <= 0) {
         return (
            <h1 className='text-center text-white'>No data Found</h1>
         );
      }
   }
   return (
      <TableRow Tailwind_utility_Class={TableRowClassName}>
         {TableDataArray.map((data, index) => ({ 

           
          }))}
      </TableRow>
   );
};

export default TableRow_Data;

{
   /* <TableRow Tailwind_utility_Class='text-white font-medium bg-[#1C1C1C] w-full h-[6vh]'>
<TableData Tailwind_utility_Class='text-[0.8vw] w-[5%] text-center align-middle border-r-[1px] border-b-[1px] border-t-[1px] border-[#322F2F]'>
   1
</TableData>
<TableData Tailwind_utility_Class='text-[0.9vw] w-[23%] text-center align-middle border-r-[1px] border-b-[1px] border-t-[1px] border-[#322F2F]'>
   John Doe
</TableData>
<TableData Tailwind_utility_Class='text-[0.9vw] w-[23%] text-center align-middle border-r-[1px] border-b-[1px] border-t-[1px] border-[#322F2F]'>
   john@example.com
</TableData>
<TableData Tailwind_utility_Class='text-[0.9vw] w-[23%] text-center align-middle border-r-[1px] border-b-[1px] border-t-[1px] border-[#322F2F]'>
   1234567890
</TableData>
<TableData Tailwind_utility_Class='text-[0.8vw] w-[23%] text-center align-middle border-r-[1px] border-b-[1px] border-t-[1px] border-[#322F2F]'>
   <button className='bg-[#322F2F] text-white px-2 py-1 rounded p-[3vw]'>
      View
   </button>
</TableData>
</TableRow> */
}
