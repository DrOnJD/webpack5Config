import { configureStore } from '@reduxjs/toolkit';

import counter from './dispatchers/counter';


export default configureStore({
  reducer: {
    counter,
  },
  devTools: true,
});
