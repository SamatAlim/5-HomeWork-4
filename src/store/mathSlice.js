import { createSlice } from "@reduxjs/toolkit";

const mathSlice = createSlice({
  name: "mathSlice",
  initialState: {
    input1: "",
    input2: "",
    result: 0,
  },
  reducers: {
    firstInput: (state, action) => {
      state.input1 = parseInt(action.payload, 10) || 0;
    },
    secondInput: (state, action) => {
      state.input2 = parseInt(action.payload, 10) || 0 ;
    },
    addNumbers: (state, action) => {
      const { num1, num2 } = action.payload;
      state.result = num1 + num2;
    },
    subtractNumbers: (state, action) => {
      const { num1, num2 } = action.payload;
      state.result = num1 - num2;
    },
    multiplyNumbers: (state, action) => {
      const { num1, num2 } = action.payload;
      state.result = num1 * num2;
    },
    divideNumbers: (state, action) => {
      const { num1, num2 } = action.payload;
      state.result = num1 / num2;
    },
    cleanInputs: (state, action)=>{
      state.input1 = ''
      state.input2 = ''
      state.result = ''
      alert('clean')
    }
  },
});

export const { firstInput, secondInput, addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, cleanInputs} =
  mathSlice.actions;

export default mathSlice.reducer;