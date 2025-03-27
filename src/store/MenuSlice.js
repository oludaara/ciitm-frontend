import { createSlice } from '@reduxjs/toolkit';

let Menu_Slice = createSlice({
   name: 'Menu',
   initialState: true,
   reducers: {
      toggleMenu: (state, action) => {
         return action.payload;
      },
   },
});

export const { toggleMenu } = Menu_Slice.actions;
export default Menu_Slice.reducer;
