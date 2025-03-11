import React, { useEffect, useState } from 'react';
import { useRazorpay } from 'react-razorpay';
import logo from '../../assets/images/ciitmLogo.png';
import axios from 'axios';
import Input from './Input';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Payment = ({}) => {
   let student = useSelector(state => state.Payment.Payment_Info);

   const [Amount, setAmount] = useState(null);
   const [Reload, setReload] = useState(false);

   useEffect(() => {
      if (student) {
         setReload(true);
      }

   }, [student]);

   let Rayzor_Pay_id = import.meta.env.VITE_RAZORPAY_KEY_ID;

   if (!Rayzor_Pay_id) {
      alert('Razorpay Key ID is not configured');
      return;
   }

   const { error, isLoading, Razorpay } = useRazorpay();

   if (isLoading) {
      console.log('Loading...');
      return;
   }

   if (error) {
      alert('Error loading Razorpay');
      return;
   }

   let Handle_Input = async e => {
      try {
         const amount = e.target.value;
         setAmount(amount);
      } catch (error) {
         console.log('error:', error);
      }
   };

   const handlePayment = async () => {
      try {
         const response = await axios.post('/api/pay/fee', {
            amount: Number(Amount),
            currency: 'INR',
            receipt: 'order_rcptid_11',
            payment_capture: 1,
         });

         const order_id = response.data.id;

         const options = {
            key: Rayzor_Pay_id,
            amount: Number(Amount) * 100,
            currency: 'INR',
            name: 'CIITM DHANBAD',
            description: 'Pay for your Future',
            image: logo,
            order_id: order_id,
            handler: response => {
               Swal.fire({
                  icon: 'success',
                  title: 'Payment Successful!',
                  text: 'Thank you for your payment',
               });
            },
            prefill: {
               name: 'John Doe',
               email: 'john.doe@example.com',
               contact: '9999999999',
            },
            theme: {
               color: '#F37254',
            },
         };

         const razorpayInstance = new Razorpay(options);
         razorpayInstance.open();
      } catch (error) {
         console.error(error);
         alert('An error occurred while processing your payment');
      }
   };
   return (
      <div className='bg-[#FAFAFA] border-x-[0.62px] border-b-[0.62px] border-[#D7D7D79E] p-8'>
         {Reload && (
            <>
               <input
                  className='bg-white border-[1px] border-[#D7D7D79E] rounded-lg px-4 py-3 placeholder:text-[.9vw] max-[599px]:placeholder:text-[2.9vw] outline-none'
                  onInput={e => Handle_Input(e)}
                  type='text'
                  name='amount'
                  placeholder='Enter Amount'
                  id='amount'
               />

               <button
                  className='bg-green-600 ml-[2vw] p-[0.7vw] text-white rounded-md font-medium'
                  onClick={() => handlePayment()}
               >
                  Pay Your Fee
               </button>
            </>
         )}
      </div>
   );
};

export default Payment;
