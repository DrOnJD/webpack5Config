import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { actions } from 'store/users/reducers';
import { selectHobbyList } from 'store/users/selectors';

import styles from './User.css';


const User = () => {
  const dispatch = useDispatch();

  const handleKeyDown = useCallback(({ target, keyCode }) => {
    if (keyCode === 13) {
      dispatch(actions.addHobbyByUserId({ id: 4, hobby: target.value }));
      target.value = '';
    }
  }, [dispatch]);
  const hobbyList = useSelector(selectHobbyList(4));

  return (
    <div className={styles.user}>
      <h1>User</h1>
      <ul className={styles.hobbyList}>
        <h3>Hobby list</h3>
        <input type="text" onKeyDown={handleKeyDown} />
        {hobbyList?.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
      <Link to="/">App</Link>
    </div>
  );
};

export default User;
