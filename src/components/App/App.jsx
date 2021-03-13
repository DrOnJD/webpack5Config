import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incrementAsync, decrementAsync } from 'store/actions/counter';
import { counterValueSelector } from 'store/selectors/counter';

import styles from './App.css';


const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterValueSelector);
  return (
    <div className={styles.app}>
      <div className={styles.center}>
        <div className={styles.button} onClick={() => dispatch(decrementAsync())}>decrement</div>
        <div className={styles.cicle}>{counter}</div>
        <div className={styles.button} onClick={() => dispatch(incrementAsync('data', 'meta'))}>increment</div>
      </div>
    </div>
  );
};

export default App;
