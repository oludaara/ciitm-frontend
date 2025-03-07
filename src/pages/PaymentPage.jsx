import React, { useEffect, useState } from 'react';
import TitleContainer from '../components/paymenComponents/TitleContainer';
import Summary from '../components/paymenComponents/Summary';
import { useSelector } from 'react-redux';
import { use } from 'react';

const PaymentPage = () => {
   const [Student, setStudent] = useState(null);
   const [Error, setError] = useState(false)
   const [Course, setCourse] = useState(null);
   let payment = useSelector(state => state.Payment.Payment_Info);

 

   useEffect(() => {

      if (!payment) {
         setError(true)
      }
      else{
         setStudent(payment.student);

         setCourse(payment.course);
      }
    
   }, [payment]);

   console.log('Student payment', payment);

   const details = [
      {
         Name: 'Name',
         Placeholder: 'Your Name',
         Label: 'Name:',
         Value: Student?.firstName,
      },
      {
         Name: 'Email',
         Placeholder: 'Your Gmail',
         Label: 'Email:',
         Value: Student?.email[0],
      },

      {
         Name: 'Phone',
         Placeholder: 'Your Number',
         Label: 'Number:',
         Value: Student?.contactNumber,
      },
      // fatherName

      {
         Name: 'FatherName',
         Placeholder: 'Your Father Name',
         Label: 'Father Name:',
         Value: Student?.fatherName,
      },

      {
         Name: 'MotherName',
         Placeholder: 'Your Mother Name',
         Label: 'Mother Name:',
         Value: Student?.motherName,
      },
   ];

   const Course_Info = [
      {
         id: 'Course_Name',
         name: 'Course Name',
         amount: '20$ Per Year',
      },
      {
         id: 'course_Code',
         name: 'Course Code',
         amount: '20$ Per Year',
      },
      {
         id: 'course_Duration',
         name: 'Course Duration',
         amount: '20$ Per Year',
      },
      {
         id: 'course_Price',
         name: 'Course Price',
         amount: '20$ Per Year',
      },
   ];

   const fees = [
      { id: 'fee', name: 'Admission Fee', amount: '20$ Per Year' },
      { id: 'fee', name: 'Transport Fee', amount: '20$ Per Year' },
      { id: 'fee', name: 'Sports Fee', amount: '20$ Per Year' },
      { id: 'fee', name: 'Hostel Fee', amount: '20$ Per Year' },
   ];
   const totalAmount = fees.reduce(
      (sum, fee) => sum + parseInt(fee.amount),
      0,
   );
   const feesList = [
      ...fees,
      {
         id: 'total',
         name: 'Total',
         amount: `${totalAmount}$ Per Year`,
      },
   ];

   return (
      <section className='w-full min-h-screen bg-[#F8F9FD] px-10 max-[599px]:px-4 py-20 flex items-center max-[599px]:justify-center gap-6 flex-col'>
         <div className='w-full px-4 py-6 bg-white rounded-2xl'>
            <h1 className='heading text-[1.65vw] max-[599px]:text-[3.65vw]'>
               Secure Payment Gateway
            </h1>
         </div>
         <div className='Payment_Container w-full h-full flex justify-between max-[599px]:flex-col gap-4 rounded-2xl'>
            <div className='payment-left-container w-[75%] max-[599px]:w-full flex flex-col gap-8 bg-white px-6 max-[599px]:px-4 py-8 max-[599px]:py-4 rounded-2xl border-[#D7D7D79E]'>
               {/* {!payment && <h1 className='text-red-600'>Enter Student Id</h1>} */}
               <TitleContainer
                  title={'Student Information'}
                  form={true}
                  details={details}
               />
               <TitleContainer
                  title={'Payment Information'}
                  amount={true}
                  total={80}
               />
               <TitleContainer
                  title={'Bank Account'}
                  bank={true}
                  width={true}
               />
            </div>

            <Summary
               heading={'Masters of Communication Application'}
               duration={'4-Years'}
               feesList={feesList}
            />
         </div>
      </section>
   );
};

export default PaymentPage;
