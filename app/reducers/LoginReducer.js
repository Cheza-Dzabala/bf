import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_PENDING } from './../actions/types';

const initialState = {
    loginPending: false,
    loginError: null,
    loginSuccess: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                loginPending: action.payload
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: action.payload
            };

        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload
            };
        default:
            return {
                ...state
            }
    }
}
