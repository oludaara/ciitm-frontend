import React from 'react';
import logo from '../../assets/images/ciitmLogo.png';
import { useRazorpay , } from "react-razorpay";
import Input from './Input';
import axios from 'axios';

const Form = ({ details }) => {


   const { error, isLoading, Razorpay } = useRazorpay();
   let Rayzor_Pay_id = import.meta.env.VITE_RAZORPAY_KEY_ID

   if(!Rayzor_Pay_id){
      alert('RazorPay Key ID is not configured');
   }

   let Handle_Search = async() => {
      // alert('Search Button Clicked');

      try {
         let response = await axios.post('/api//pay/fee' , {
            amount: 2000,
            currency: 'INR',
            receipt: 'order_rcptid_11',
            payment_capture: 1,
         })

         let order_id = response.data.id;

    
      

         const options = {
            key: Rayzor_Pay_id,
            amount: 100 * 100,
            currency: "INR",
            name: "CIITM DHANBAD",
            description: "Pay for your Future",
            image: logo,
            order_id: order_id, 
            handler: (response) => {
              console.log(response);
              alert("Payment Successful!");
            },
            prefill: {
              name: "John Doe",
              email: "john.doe@example.com",
              contact: "9999999999",
            },
            theme: {
              color: "#F37254",
            },
          };
  
          const razorpayInstance = new Razorpay(options);
          razorpayInstance.open();


      } catch (error) {
         console.log(error);
         alert('Error Occured');
      }
      
   };
   return (
      <div className='w-full flex flex-wrap gap-4 font-[Montserrat] bg-[#FAFAFA] border-x-[0.62px] border-b-[0.62px] border-[#D7D7D79E] p-4'>
         {console.log(details)}

         {/* Name: 'Student Id',
         Placeholder: 'Student Id',
         Label: 'Student Id:', */}

         <div className='Student_Id_Container w-full'>
            <label htmlFor='ujnju'>
               <h1 className='text-[1vw] max-[599px]:text-[3vw] font-medium mb-2 ml-1'>
                  Student Id
               </h1>
            </label>

            <div className='flex'>
               <input
                  className='bg-white border-[1px] border-[#D7D7D79E] rounded-lg px-4 py-3 placeholder:text-[.9vw] max-[599px]:placeholder:text-[2.9vw] outline-none w-[88%]'
                  type='text'
                  name='ijoi'
                  placeholder='Student Id'
                  id='Student_Id'
               />

               <button className='bg-green-600 ml-[2vw] p-[0.7vw] text-white rounded-md font-medium' onClick={()=> Handle_Search()}>Search</button>
            </div>
         </div>
         {details.map(detail => (
            <Input
               key={detail.Name}
               Name={detail.Name}
               Placeholder={detail.Placeholder}
               Label={detail.Label}
            />
         ))}
      </div>
   );
};

export default Form;
