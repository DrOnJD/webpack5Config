import { createAsyncThunk } from '@reduxjs/toolkit';

import { asyncName } from './actions';


export const getUsers = createAsyncThunk(
  asyncName('fetch'),
  async (payload, { dispatch, requestId }) => { // eslint-disable-line
    const data = await globalThis.fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

    return data;
  },
);
