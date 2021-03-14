export default (reducer) => ({
  reducer,
  prepare: (payload, meta) => ({ payload, meta }),
});
