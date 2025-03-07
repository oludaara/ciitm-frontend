// import { useRazorpay } from 'react-razorpay';
// import logo from '../assets/images/ciitmLogo.png';
// import axios from 'axios';

// const usePay = ({ Amount }) => {
//   let Rayzor_Pay_id = import.meta.env.VITE_RAZORPAY_KEY_ID;
//   console.log('razorpay key id:', Rayzor_Pay_id);

//   // Early exit if Razorpay Key is not available
//   if (!Rayzor_Pay_id) {
//     alert('Razorpay Key ID is not configured');
//     return;
//   }

//   const { error, isLoading, Razorpay } = useRazorpay();

//   // Handle loading state or error display in the UI if necessary
//   if (isLoading) {
//     // You can show a loading spinner or message here
//     console.log('Loading...');
//     return;
//   }

//   // If an error occurs while loading Razorpay, handle the error
//   if (error) {
//     alert('Error loading Razorpay');
//     return;
//   }

//   const handlePayment = async () => {
//     try {
//       const response = await axios.post('/api/pay/fee', {
//         amount: Number(Amount),
//         currency: 'INR',
//         receipt: 'order_rcptid_11',
//         payment_capture: 1,
//       });

//       const order_id = response.data.id;

//       const options = {
//         key: Rayzor_Pay_id,
//         amount: Number(Amount) * 100, // Razorpay expects amount in paise
//         currency: 'INR',
//         name: 'CIITM DHANBAD',
//         description: 'Pay for your Future',
//         image: logo,
//         order_id: order_id,
//         handler: (response) => {
//           console.log(response);
//           alert('Payment Successful!');
//         },
//         prefill: {
//           name: 'John Doe',
//           email: 'john.doe@example.com',
//           contact: '9999999999',
//         },
//         theme: {
//           color: '#F37254',
//         },
//       };

//       const razorpayInstance = new Razorpay(options);
//       razorpayInstance.open();
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred while processing your payment');
//     }
//   };

//   // Call the handlePayment function wherever needed, e.g., on button click
//   return handlePayment;
// };
