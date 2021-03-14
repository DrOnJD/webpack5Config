import { getUsersApi } from 'store/api/users';
import { actions } from 'store/slices/users';


export const getUsers = async (dispatch) => {
  dispatch(actions.addUsers(undefined, 'PENDING'));
  const { data } = await getUsersApi();
  dispatch(actions.addUsers(data, 'SUCCESS'));
};

export const decrementAsync = () => () => {

};
