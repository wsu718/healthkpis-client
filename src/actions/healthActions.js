import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_HEALTH_START = 'GET_HEALTH_START';
export const GET_HEALTH_SUCCESS = 'GET_HEALTH_SUCCESS';
export const GET_HEALTH_FAILURE = 'GET_HEALTH_FAILURE';

export const GET_HEALTHBYDATE_START = 'GET_HEALTHBYDATE_START';
export const GET_HEALTHBYDATE_SUCCESS = 'GET_HEALTHBYDATE_SUCCESS';
export const GET_HEALTHBYDATE_FAILURE = 'GET_HEALTHBYDATE_FAILURE';

export const ADD_HEALTH_START = 'ADD_HEALTH_START';
export const ADD_HEALTH_SUCCESS = 'ADD_HEALTH_SUCCESS';
export const ADD_HEALTH_FAILURE = 'ADD_HEALTH_FAILURE';

export const DELETE_HEALTH_START = 'DELETE_HEALTH_START';
export const DELETE_HEALTH_SUCCESS = 'DELETE_HEALTH_SUCCESS';
export const DELETE_HEALTH_FAILURE = 'DELETE_HEALTH_FAILURE';

export const UPDATE_HEALTH_START = 'UPDATE_HEALTH_START'
export const UPDATE_HEALTH_SUCCESS = 'UPDATE_HEALTH_SUCCESS'
export const UPDATE_HEALTH_FAILURE = 'UPDATE_HEALTH_FAILURE'

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

export const getHealthByDate = date => dispatch => {
    dispatch({ type: GET_HEALTHBYDATE_START });
    axiosWithAuth()
        .then(authedAxios => {
            authedAxios.get(`/${date}`)
                .then(res => {
                    dispatch({ type: GET_HEALTHBYDATE_SUCCESS, payload: res.data })
                })
                .catch(err => dispatch({ type: GET_HEALTHBYDATE_FAILURE, payload: err.response }))
        });
};


export const addHealth = health => dispatch => {
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

export const deleteHealth = id => dispatch => {
    dispatch({ type: DELETE_HEALTH_START })
    axiosWithAuth()
        .then(authedAxios => {
            authedAxios
                .delete(`/${id}`)
                .then(res => {
                    dispatch({ type: DELETE_HEALTH_SUCCESS, payload: id })
                })
                .catch(err => dispatch({ type: DELETE_HEALTH_FAILURE, apyload: err.response }))
        })
}

export const updateHealth = (id, health) => dispatch => {
    dispatch({ type: UPDATE_HEALTH_START });
    axiosWithAuth()
        .then(authedAxios => {
            authedAxios
                .put(`/${id}`, health)
                .then(res => {
                    dispatch({ type: UPDATE_HEALTH_SUCCESS, payload: res.data });
                })
                .catch(err => dispatch({ type: UPDATE_HEALTH_FAILURE, payload: err.response }));
        });
};