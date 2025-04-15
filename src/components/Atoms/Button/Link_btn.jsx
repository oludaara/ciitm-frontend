import React from 'react';
import { Link } from 'react-router-dom';

const Link_btn = ({link , buttonText}) => {
   return <Link to={link}>
      <button className='bg-[#322F2F] text-white px-4 py-2 rounded'>
         {buttonText}
      </button>
   </Link>;
};

export default Link_btn;
