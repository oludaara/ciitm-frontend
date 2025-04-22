import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   addInput,
   setInputValueByIndex,
   setInputValueByName,
} from '../../../store/InputSlice';

const Input_Primary = ({
   Type = 'text',
   PlaceHolder = '',
   Value = '',
   ReadOnly = false,
   className = '',
   name,
   index,
}) => {
   const dispatch = useDispatch();
   const inputs = useSelector(state => state.Input.inputs);

   useEffect(() => {
      const exists = inputs.some(input => input.name === name);
      if (!exists) {
         dispatch(
            addInput({
               type: Type,
               label: PlaceHolder,
               name: name,
               value: Value,
               readOnly: ReadOnly,
            }),
         );
      }
   }, [dispatch, inputs, name, Type, PlaceHolder, Value, ReadOnly]);

   const handleChange = e => {
      const newValue = e.target.value;

      if (!ReadOnly) {
         dispatch(setInputValueByName({ name, value: newValue }));
      }
   };

   const currentInput = inputs.find(input => input.name === name);
   const valueToDisplay = currentInput ? currentInput.value : Value;

   return (
      <input
         type={Type}
         readOnly={ReadOnly}
         placeholder={PlaceHolder}
         value={valueToDisplay}
         onChange={ReadOnly ? undefined : handleChange}
         className={className}
         name={name}
      />
   );
};

export default Input_Primary;
