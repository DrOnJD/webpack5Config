import { configureStore } from '@reduxjs/toolkit';

import { reducer as userReducer } from './slices/users';


export default configureStore({
  reducer: {
    users: userReducer,
  },
  devTools: true,
});
