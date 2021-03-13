import { configureStore } from '@reduxjs/toolkit';

import users from './dispatchers/users';


export default configureStore({
  reducer: {
    users,
  },
  devTools: true,
});
