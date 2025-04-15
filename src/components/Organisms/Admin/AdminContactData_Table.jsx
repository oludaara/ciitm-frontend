import React from 'react';
import TableRow_Data from '../../Molecules/table/TableRow_Data';
import Loader from 'react-spinners/ScaleLoader';
import TableRow from '../../Atoms/Table/Tr/TableRow';
import TableData from '../../Atoms/Table/Td/TableData';
import { Link } from 'react-router-dom';

const override = {
   display: 'block',
   position: 'absolute',
   top: '40%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   margin: '0 auto',
};

const AdminContactData_Table = ({ Data = [] }) => {
   if (Data.length <= 0) {
      return (
         <Loader
            color='white'
            loading={true}
            cssOverride={override}
            size={30}
            aria-label='Loading Spinner'
            data-testid='loader'
         />
      );
   }

   console.log('Data from AdminContactData_Table:', Data);

   return (
      <>
         {Data.map((item, index) => (
            <TableRow
               key={index}
               Tailwind_utility_Class='w-full h-[7vh]  text-white'
            >
               <TableData Tailwind_utility_Class='text-center border-r-2  border-t-2  border-b-2  border-[#322F2F]'>
                  {index + 1}
               </TableData>
               <TableData Tailwind_utility_Class='text-center  border-r-2 border-t-2  border-b-2  border-[#322F2F]'>
                  {item.cName}
               </TableData>
               <TableData Tailwind_utility_Class='text-center  border-r-2 border-t-2 border-b-2  border-[#322F2F]'>
                  {item.cEmail}
               </TableData>
               <TableData Tailwind_utility_Class='text-center  border-r-2 border-t-2 border-b-2  border-[#322F2F]'>
                  {item.cNumber}
               </TableData>
               <TableData Tailwind_utility_Class='text-center   border-t-2  border-b-2  border-[#322F2F]'>
                  <Link to={`/admin/contact/${item._id}`}>
                     <button className='bg-[#322F2F] text-white px-4 py-2 rounded'>
                        View
                     </button>
                  </Link>
               </TableData>
            </TableRow>
         ))}
      </>
   );
};

export default AdminContactData_Table;
