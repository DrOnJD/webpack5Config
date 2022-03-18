import { configureStore } from '@reduxjs/toolkit';

import { reducer as usersReducer } from './users/reducers';


export default configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true,
});
