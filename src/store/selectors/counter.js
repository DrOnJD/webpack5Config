import { createSelector } from '@reduxjs/toolkit';


const root = (store) => store;
export const counterSelector = createSelector(root, (state) => state.counter);
export const counterValueSelector = createSelector(root, (state) => state.counter.value);
