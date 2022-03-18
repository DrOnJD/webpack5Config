import { createSelector } from '@reduxjs/toolkit';


export const selectMeta = (select) => createSelector(select, ({ meta }) => meta);
export const selectError = (select) => createSelector(select, ({ error }) => error);
export const selectData = (select) => createSelector(select, ({ data }) => data);
export const selectById = (select) => (id) => createSelector(
  selectData(select),
  (list) => list.find((test) => test.id === id),
);

export default {
  selectMeta,
  selectError,
  selectData,
  selectById,
};
