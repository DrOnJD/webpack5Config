/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import withMeta from './helpers';


export const usersAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({ meta: { loadingStatus: null } }),
  reducers: {
    addUsers: withMeta((state, { payload, meta }) => {
      state.meta.loadingStatus = meta;
      if (!payload) return;
      usersAdapter.addMany(state, payload);
    }),
    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addUsers, decrement, incrementByAmount } = usersSlice.actions;
export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state) => state.users);

export default usersSlice.reducer;
