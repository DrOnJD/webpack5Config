import { createAction } from '@reduxjs/toolkit';


export const add = createAction('add');
export const addMany = createAction('addMany');
export const addHobbyByUserId = createAction('addHobbyByUserId');
export const name = 'users';
export const asyncName = (subName) => `${name}/${subName}`;

export default {
  asyncName,
  name,
  add,
  addMany,
  addHobbyByUserId,
};
