import React from 'react';
import TableRow_Data from '../../Molecules/table/TableRow_Data';
import propType from 'prop-types';

const AdminContactData_Table = ({ Data = [] }) => {

    if (Data.length <= 0) {

     return (
        <h1 className='text-center text-white'>No data Found</h1>
     );
      
    }


   

   return (
    Data.forEach((data, index) => {
        return (
            <TableRow_Data
                key={index}
                TableDataArray={[data.cName, data.cEmail, data.cNumber, data.cMessage]}
                TableDataClassName='text-white font-medium bg-[#1C1C1C] w-full h-[6vh]'
                TableRowClassName='text-[0.8vw] w-[5%] text-center align-middle border-r-[1px] border-b-[1px] border-t-[1px] border-[#322F2F]'
            />
        )
    }
    )
    

   );
};



export default AdminContactData_Table;
