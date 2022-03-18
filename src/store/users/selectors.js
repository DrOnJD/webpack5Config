import { createSelector } from '@reduxjs/toolkit';

import {
  selectMeta,
  selectError,
  selectData,
  selectById,
} from 'store/commonSelectors';


export const selectUsers = ({ users }) => users; // TODO Это пример, после ознакомления удалить
export const selectUsersMeta = selectMeta(selectUsers);
export const selectUsersError = selectError(selectUsers);
export const selectUsersList = selectData(selectUsers);
export const selectUserById = selectById(selectUsers);
export const selectHobbyList = (id) => createSelector(
  selectUserById(id),
  (user) => user?.hobbyList,
);

export default {
  selectUsers,
  selectUsersMeta,
  selectUsersList,
  selectUsersError,
  selectUserById,
  selectHobbyList,
};
