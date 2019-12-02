import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import LoginReducer from './LoginReducer';
import LogoutReducer from './LogoutReducer';

export default combineReducers({
  default: defaultReducer,
  login: LoginReducer,
  logout: LogoutReducer,
});
