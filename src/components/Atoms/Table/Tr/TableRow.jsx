import React from 'react';

const TableRow = ({ children, Tailwind_utility_Class }) => {
   return <tr className={`${Tailwind_utility_Class}`}>{children}</tr>;
};

export default TableRow;
