import { DEFAULT_ACTION } from './types'


export const defaultAction = () => (dispatch) => dispatch({
    type: DEFAULT_ACTION,
    payload: 'Redux Set Up'
});