import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 10,
  countt: 1,
};
export const counterSlice = createSlice({
  name: "home", //用来进行切片的
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
