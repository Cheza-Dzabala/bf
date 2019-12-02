import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_PENDING } from './../actions/types';
import axios from 'axios';

export const loginUser = ({ email, password }) => dispatch => {
    dispatch({
        type: LOGIN_PENDING,
        payload: true
    })
    axios.post('https://caret-bn-backend-staging.herokuapp.com/api/v1/users/login', {
        email,
        password
    }).then(response => {
        dispatch({
            type: LOGIN_ERROR,
            payload: null
        })
        dispatch({
            type: LOGIN_PENDING,
            payload: false
        })
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response
        })
    }).catch(error => {
        dispatch({
            type: LOGIN_PENDING,
            payload: false
        })
        dispatch({
            type: LOGIN_ERROR,
            payload: error.response
        })
    });
}