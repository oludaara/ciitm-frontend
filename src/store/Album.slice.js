import { createSlice } from '@reduxjs/toolkit';

const album_Slice = createSlice({
  name: 'album',
  initialState: {
    album: null,
  },
  reducers: {
    album: (state, action) => {
      state.album = action.payload;
    },
  },
});

export const { album } = album_Slice.actions;
export default album_Slice.reducer;
