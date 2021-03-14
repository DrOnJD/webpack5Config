import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from 'store/thunks/users';
import { selectors } from 'store/slices/users';

import styles from './App.css';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers), [dispatch]);
  console.log(useSelector(selectors.selectEntities)) // eslint-disable-line
  return (
    <div className={styles.app}>
      <div className={styles.center}>App</div>
      <div className={styles.logo} />
    </div>
  );
};

export default App;
