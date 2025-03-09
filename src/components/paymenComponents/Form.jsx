import React, { useState } from 'react';

import Input from './Input';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { setPayment_Info } from '../../store/PaymentSlice';
import Swal from 'sweetalert2';

const Form = ({ details }) => {
   const [Student_Id, setStudent_Id] = useState(null);
   const payment = useSelector(state => state.Payment.Payment_Info);
   const dispatch = useDispatch();

   

   let Handle_Search = async () => {
      try {

      

         const response = await axios.get(
            `/api/find/student/payment/info?uniqueId=${Student_Id}`,
         );

      

         const data = response.data.data;

         dispatch(setPayment_Info(data));
         console.log('data:', data);
      } catch (error) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:
               error.response.data.message || 'Student Id not found!',
         });
      }
   };

   return (
      <div className='w-full flex flex-wrap gap-4 font-[Montserrat] bg-[#FAFAFA] border-x-[0.62px] border-b-[0.62px] border-[#D7D7D79E] p-4'>
         <div className='Student_Id_Container w-full'>
            <label htmlFor='ujnju'>
               <h1 className='text-[1vw] max-[599px]:text-[3vw] font-medium mb-2 ml-1'>
                  Student Id
               </h1>
            </label>

            <div className='flex'>
         
            {/* Student_id */}
               <input
                  onInput={e => setStudent_Id(e.target.value)}
                  className='bg-white border-[1px] border-[#D7D7D79E] rounded-lg px-4 py-3 placeholder:text-[.9vw] max-[599px]:placeholder:text-[2.9vw] outline-none w-[88%]'
                  type='text'
                  name='ijoi'
                  placeholder='Student Id'
                  id='Student_Id'
               />

               <button
                  className='bg-green-600 ml-[2vw] p-[0.7vw] text-white rounded-md font-medium'
                  onClick={() => Handle_Search()}
               >
                  Search
               </button>
            </div>
         </div>

         {details.map(detail => (
            <Input
               key={detail.Name}
               Name={detail.Name}
               Value={detail?.Value}
               Placeholder={detail.Placeholder}
               Label={detail.Label}
            />
         ))}
      </div>
   );
};

export default Form;
