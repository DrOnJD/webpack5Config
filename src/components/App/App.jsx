import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from 'store/actions/users';
import { selectUserById } from 'store/dispatchers/users';

import styles from './App.css';


const App = () => {
  const dispatch = useDispatch();
  dispatch(getUsers);
  const user = useSelector((state) => selectUserById(state, 3));
  console.log(user); // eslint-disable-line
  return (
    <div className={styles.app}>
      <div className={styles.center} />
    </div>
  );
};

export default App;
