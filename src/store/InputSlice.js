// InputSlice.js
import { createSlice } from '@reduxjs/toolkit';

const InputSlice = createSlice({
   name: 'Input',
   initialState: {
      inputs: [],
   },
   reducers: {
      addInput: (state, action) => {
         const {
            type,
            label,
            name,
            value = '',
            readOnly = false,
         } = action.payload;

         const isNameTaken = state.inputs.some(
            input => input.name === name,
         );

         if (!isNameTaken) {
            state.inputs.push({
               type,
               label,
               name,
               value,
               readOnly,
            });
         } else {
            console.warn(
               `Input with name ${name} already exists. Please use a different name.`,
            );
         }
      },

      setInputValueByIndex: (state, action) => {
         const { index, value } = action.payload;
         if (state.inputs[index]) {
            state.inputs[index].value = value;
         }
         console.warn(
            `Input with index ${index} does not exist. Please check the index.`,
         );
      },

      setInputValueByName: (state, action) => {
         const { name, value } = action.payload;

         const input = state.inputs.find(i => i.name === name);

         if (input) {
            input.value = value;
            console.log('input setByName value', input.value);
         }
         console.warn(
            `Input with name ${name} does not exist. Please check the name.`,
         );
      },

      setInputReadOnlyByName: (state, action) => {
         const { name, readOnly } = action.payload;
         const input = state.inputs.find(i => i.name === name);
         if (input) {
            input.readOnly = readOnly;
         }
         console.warn(
            `Input with name ${name} does not exist. Please check the name.`,
         );
      },
   },
});

export const {
   addInput,
   setInputValueByIndex,
   setInputValueByName,
   setInputReadOnlyByName,
} = InputSlice.actions;

export default InputSlice.reducer;
