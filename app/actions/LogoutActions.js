import { LOGOUT } from './types';


export const logoutUser = () => (dispatch) => dispatch({
  type: LOGOUT,
  payload: true,
});
