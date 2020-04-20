import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_HEALTH_START = 'GET_HEALTH_START';
export const GET_HEALTH_SUCCESS = 'GET_HEALTH_SUCCESS';
export const GET_HEALTH_FAILURE = 'GET_HEALTH_FAILURE';

export const ADD_HEALTH_START = 'ADD_HEALTH_START';
export const ADD_HEALTH_SUCCESS = 'ADD_HEALTH_SUCCESS';
export const ADD_HEALTH_FAILURE = 'ADD_HEALTH_FAILURE';

export const getHealth = () => dispatch => {
    dispatch({ type: GET_HEALTH_START });
    axiosWithAuth()
        .then(authedAxios => {
            authedAxios.get(`/`)
                .then(res => {
                    dispatch({ type: GET_HEALTH_SUCCESS, payload: res.data })
                })
                .catch(err => dispatch({ type: GET_HEALTH_FAILURE, payload: err.response }))
        });
};

export const addHealth = health => dispatch => {
    console.log(health)
    dispatch({ type: ADD_HEALTH_START });
    axiosWithAuth()
        .then(authedAxios => {
            authedAxios
                .post('/', health)
                .then(res => {
                    dispatch({ type: ADD_HEALTH_SUCCESS, payload: res.data });
                })
                .catch(err => dispatch({ type: ADD_HEALTH_FAILURE, payload: err.response }));
        });
};
