/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import withMeta from './helpers';


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: withMeta((state) => {
      state.value += 1;
    }),
    decrement: withMeta((state) => {
      state.value -= 1;
    }),
    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
