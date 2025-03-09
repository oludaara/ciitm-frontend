import { createSlice } from '@reduxjs/toolkit';

let PaymentSlice = createSlice({
   name: 'Payment',
   initialState: {
      Payment_Info: null,
   },
   reducers: {
      setPayment_Info: (state, action) => {
         state.Payment_Info = action.payload;
      },
   },
});

export const { setPayment_Info } = PaymentSlice.actions;
export default PaymentSlice.reducer;
