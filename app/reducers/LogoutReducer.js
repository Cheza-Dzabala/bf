import { LOGOUT } from '../actions/types';


const initialState = {
  loggedOut: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loggedOut: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
