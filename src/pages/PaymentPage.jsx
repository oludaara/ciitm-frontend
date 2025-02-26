import React from 'react';
import PaymentCard from '../components/paymenComponents/PaymentCard';
import StudentInfo from '../components/paymenComponents/StudentInfo';

const PaymentPage = () => {
   return (
      <section className='w-full min-h-screen bg-[#F8F9FD] px-10 max-[599px]:px-4 py-20 flex items-center max-[999px]:justify-center gap-12 flex-col'>
         <div className='w-full p-4 bg-white border-[#D7D7D79E] border-[0.62px] rounded-2xl'>
            <h1 className='heading text-[1.65vw] max-[599px]:text-[3.65vw]'>
               Secure Payment Gateway
            </h1>
         </div>
         <div className='Payment_Container w-full h-[100vh] bg-[#FFFFFF] flex  justify-between border-[#D7D7D79E] border-[0.62px] rounded-2xl px-[2vw] py-[3vh]'>
            {/* <PaymentCard /> */}
            <div className='payment_Container_Left w-[72%] h-full mr-[2vw]'>
               <StudentInfo />
            </div>

            <div className='payment_Container_Right w-[35%] h-[55%] bg-green-500  border-[#D7D7D79E] border-[0.62px] rounded-2xl'></div>
         </div>
      </section>
   );
};

export default PaymentPage;
