import { increment, decrement } from 'store/dispatchers/counter';


export const incrementAsync = (...args) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(...args));
  }, 1000);
};

export const decrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrement());
  }, 1000);
};
