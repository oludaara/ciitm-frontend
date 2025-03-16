import { createSlice } from '@reduxjs/toolkit';

const Image_Slice = createSlice({
    name: 'Image',
    initialState: {
        Image: [],
    },
    reducers: {
        set_Image: (state, action) => {
          
            let find_index = state.Image.findIndex(
                item => item.name === action.payload.name
            );


            if (find_index !== -1) {
                state.Image[find_index] = action.payload;
            }else{
                state.Image.push(action.payload);
            }

        },

        Remove_Image: (state, action) => {
            const index = state.Image.findIndex(
                item => item._id === action.payload._id
            );
            if (index !== -1) {
                state.Image.splice(index, 1);
            }
        },
    },
});

export const { set_Image, Remove_Image } = Image_Slice.actions;
export default Image_Slice.reducer;
