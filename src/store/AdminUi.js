import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   Contact: [],
   DashBoard: [],
   isLoading: false,
};

const AdminUiSlice = createSlice({
   name: 'AdminUi',
   initialState,

   reducers: {
      setContact: (state, action) => {
         console.log('Redux: Existing Contact State:', state.Contact);
         console.log('Redux: Incoming Payload:', action.payload);

         // Make sure payload is an array
         state.Contact = Array.isArray(action.payload)
            ? [...action.payload]
            : [action.payload];
      },

      setDashBoard: (state, action) => {
         state.DashBoard = action.payload;
      },

      setIsLoading: (state, action) => {
         state.isLoading = action.payload;
      },
   },
});

// Export actions and reducer
export const { setContact, setDashBoard, setIsLoading } =
   AdminUiSlice.actions;
export default AdminUiSlice.reducer;
