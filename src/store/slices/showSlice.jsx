import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const showSlice = createSlice({
  name: "showData",
  initialState,
  reducers: {
    showData: (state) => {
      state.value = state.value;
    },
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementByValue:(state,action)=>{
      state.value = state.value + action.payload;
    }
  },
});
export default showSlice.reducer;
export const { addData, showData,increment,incrementByValue } = showSlice.actions;
