import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdMenu } from 'react-icons/md';
import { toggleMenu } from '../../../store/MenuSlice';

const Open_menu = () => {
   const [Flag, setFlag] = useState(false);
   const menu = useSelector(state => state.menu);
   const dispatch = useDispatch();

   let Handle_Menu_Open = () => {
      setFlag(!Flag);
      dispatch(toggleMenu({ menu: Flag }));
   };

   useEffect(() => {
      console.log(menu);
   }, [menu]);

   return (
      <MdMenu
         className='hidden max-[1046px]:flex text-[2rem] text-white mr-3 fixed min-[1046px]:fixed top-0 right-0 m-3 max-[1046px]:relative'
         onClick={Handle_Menu_Open}
      />
   );
};

export default Open_menu;
