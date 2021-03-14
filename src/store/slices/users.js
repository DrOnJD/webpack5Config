/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import withMeta from './helpers';


const {
  getInitialState,
  getSelectors,
  addMany,
} = createEntityAdapter();

export const { actions, reducer } = createSlice({
  name: 'users',
  initialState: getInitialState({ meta: { loadingStatus: null } }),
  reducers: {
    addUsers: withMeta((state, { payload, meta }) => {
      state.meta.loadingStatus = meta;
      if (!payload) return;
      addMany(state, payload);
    }),
  },
});

export const selectors = getSelectors((state) => state.users);
