import { createSlice } from '@reduxjs/toolkit';

import { getUsers } from './thunks';
import { name, addHobbyByUserId } from './actions';


const initialState = {
  data: [],
  meta: null,
  error: null,
};

const reducers = {
  [addHobbyByUserId]: (state, { payload: { id, hobby } }) => {
    const user = state.data.find((item) => item.id === id);
    if (!user) return;
    if (!user?.hobbyList?.length) user.hobbyList = [];
    user.hobbyList.push(hobby);
  },
};

const extraReducers = {
  [getUsers.pending]: (state, { meta }) => {
    state.meta = meta;
    state.error = null;
  },
  [getUsers.fulfilled]: (state, { payload, meta }) => {
    state.data.push(...payload);
    state.meta = meta;
  },
  [getUsers.rejected]: (state, { meta, error }) => {
    state.meta = meta;
    state.error = error;
  },
};


export const { actions, reducer } = createSlice({ // TODO Это пример, после ознакомления удалить
  name,
  initialState,
  reducers,
  extraReducers,
});
