import { getUsersApi } from 'store/api/users';
import { addUsers } from 'store/dispatchers/users';


export const getUsers = async (dispatch) => {
  dispatch(addUsers(undefined, 'PENDING'));
  const { data } = await getUsersApi();
  dispatch(addUsers(data, 'SUCCESS'));
};

export const decrementAsync = () => () => {

};
