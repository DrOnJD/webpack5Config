import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUsers } from 'store/users/thunks';
import { selectUsersList, selectUserById } from 'store/users/selectors';

import styles from './App.css';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers({ asd: 1 })), [dispatch]);
  console.log(useSelector(selectUsersList)) // eslint-disable-line
  console.log(useSelector(selectUserById(3))) // eslint-disable-line
  return (
    <div className={styles.app}>
      <div className={styles.center}>App</div>
      <div className={styles.logo} />
      <Link to="/user">User</Link>
    </div>
  );
};

export default App;
