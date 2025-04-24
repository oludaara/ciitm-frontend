import React, { useRef, useState } from 'react';
import AdminTemplate from '../../components/Templates/Admin/AdminTemplate';
import FormTemplate_Secondary from '../../components/Templates/Admin/form/FormTemplate_Secondary';
import FormTemplate from '../../components/Templates/Admin/form/FormTemplate';
import Image_Form_Title from '../../components/Molecules/Admin/image/Image_Form_Title';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const ImagePage = () => {
   let OptionRef = useRef(null);
   let OptionContainerRef = useRef(null);
   //    let [Option, setOption] = useState(false);

   let [is_OptionSelected, set_Is_OptionSelected] = useState(false);
   let [selectedOption, set_SelectedOption] = useState(null);

   let Album_Name = [
      {
         id: 1,
         name: 'Album 1',
      },
      {
         id: 2,
         name: 'Album 2',
      },
      {
         id: 3,
         name: 'Album 3',
      },
      {
         id: 4,
         name: 'Album 4',
      },
      {
         id: 5,
         name: 'Album 5',
      },
   ];

   let Handle_Option_Click = e => {
      let option = e.target.innerText;

      set_SelectedOption(option);
      set_Is_OptionSelected(false);
   };

   let Handle_Key_Down = e => {
      console.log(e);

      if (e.key === 'Escape') {
         set_Is_OptionSelected(false);
      }
      if (e.key === 'ArrowDown') {
         let nextOption = e.target.nextElementSibling;
         if (nextOption) {
            nextOption.focus();
         }
      }
      if (e.key === 'Enter') {
         let option = e.target.innerText;

         set_SelectedOption(option);
         set_Is_OptionSelected(false);
      }
   };

   let Handle_Option_Container_Click = e => {
      let option = !is_OptionSelected;

      set_Is_OptionSelected(option);
   };

   return (
      <AdminTemplate pageName='Create Image'>
         <FormTemplate_Secondary>
            <div className='Select_Album_DropDown flex items-center justify-center flex-col w-[80%] h-[10%] bg-[#ca2c2c] mt-[5vh] rounded-2xl'>
               <div
                  className='title w-full rounded-2xl bg-orange-500 flex items-center justify-between'
                  onClick={Handle_Option_Container_Click}
               >
                  <h1>
                     {selectedOption
                        ? selectedOption
                        : 'Select Album'}
                  </h1>
                  <MdOutlineArrowDropDown className='text-white text-7xl' />
               </div>

               <div
                  className='options w-full rounded-2xl  bg-blue-500 flex flex-col items-center justify-between'
                  ref={OptionContainerRef}
                  onKeyDown={e => Handle_Key_Down(e)}
               >
                  {is_OptionSelected &&
                     Album_Name.map(option => (
                        <div
                           key={option.id}
                           className='option hover:bg-red-700 w-full h-full flex items-center justify-center'
                           ref={OptionRef}
                           onClick={e => Handle_Option_Click(e)}
                        >
                           <h1>{option.name}</h1>
                        </div>
                     ))}
               </div>
            </div>
         </FormTemplate_Secondary>
      </AdminTemplate>
   );
};

export default ImagePage;
