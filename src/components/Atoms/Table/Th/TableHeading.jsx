import { memo } from 'react';

const TableHeading = ({ Tailwind_utility_Class, children }) => {
   return <th className={Tailwind_utility_Class}>{children}</th>;
};

export default memo(TableHeading);
