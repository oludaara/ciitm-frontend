import { createSlice } from "@reduxjs/toolkit";


let aboutSlice = createSlice({
    name: "about",
    initialState: {
        aboutPage: null,
        teacher: null,
        courses: null,
    },
    reducers: {
        setAboutPage: (state, action) => {
        state.aboutPage = action.payload;
        },

        setTeacher: (state, action) => {
           state.teacher =  action.payload;
        },

        setCources: (state, action) => {
            state.courses =  action.payload;
        }
    },
})


export const { setAboutPage  , setTeacher , setCources} = aboutSlice.actions;
export default aboutSlice.reducer;