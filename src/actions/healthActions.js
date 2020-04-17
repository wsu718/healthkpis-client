import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_HEALTH_START = 'GET_HEALTH_START';
export const GET_HEALTH_SUCCESS = 'GET_HEALTH_SUCCESS';
export const GET_HEALTH_FAILURE = 'GET_HEALTH_FAILURE';

export const getHealth = () => dispatch => {
    dispatch({ type: GET_HEALTH_START });
    axiosWithAuth()
        .then(authedAxios => {
            authedAxios.get(`/`)
                .then(res => {
                    console.log(res)
                    dispatch({ type: GET_HEALTH_SUCCESS, payload: res.data })
                })
                .catch(err => dispatch({ type: GET_HEALTH_FAILURE, payload: err.response }))
        });
}



