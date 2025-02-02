import { createSlice } from '@reduxjs/toolkit';

let AdmissionSlice = createSlice({
    name: 'admission',
    initialState: {
        admission: [],
    },
    reducers: {
        Admission: (state, action) => {
        state.admission = action.payload;
       
        },

        setAdmission: (state, action) => {
            state.admission = [...state.admission, action.payload];
        },

        setOneAdmission: (state, action) => {
            let find_index = state.admission.findIndex((item) => item.name === action.payload.name);
   
           console.log('find_Index 145 redux' , find_index)
            if(find_index !== -1){
                state.admission[find_index] = action.payload;
            }
            

        },


    
     
    },
});


export const { Admission , setAdmission , setOneAdmission} = AdmissionSlice.actions;

export default AdmissionSlice.reducer;