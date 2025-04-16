import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdMenu } from 'react-icons/md';
import { toggleMenu } from '../../../store/MenuSlice';
import { useLocation } from 'react-router-dom';

const Open_menu = () => {
   const menu = useSelector(state => state.menu.menu);
   const dispatch = useDispatch();

   const handleMenuToggle = () => {
      dispatch(toggleMenu({ menu: !menu }));
   };

   return (
      <MdMenu
         className='hidden text-[2rem] text-white mr-3 fixed top-0 right-0 m-3 min-[998px]:relative  max-[998px]:flex'
         onClick={() => handleMenuToggle()}
      />
   );
};

export default Open_menu;
