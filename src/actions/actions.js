import axios from 'axios';

export const ADD_EXPERIMENT = 'ADD_EXPERIMENT';

export const GET_SLEEP_START = 'GET_SLEEP_START';
export const GET_SLEEP_SUCCESS = 'GET_SLEEP_SUCCESS';
export const GET_SLEEP_FAILURE = 'GET_SLEEP_FAILURE';

export const ADD_SLEEP_START = 'ADD_SLEEP_START';
export const ADD_SLEEP_SUCCESS = 'ADD_SLEEP_SUCCESS';
export const ADD_SLEEP_FAILURE = 'ADD_SLEEP_FAILURE';


// export const addSleep = sleep => {
//     return { type: ADD_SLEEP, payload: sleep }
// }

export const addExperiment = experiment => {
    return { type: ADD_EXPERIMENT, payload: experiment }
}

export const getSleep = () => dispatch => {
    dispatch({ type: GET_SLEEP_START });
    axios
        .get(`http://api.healthkpis.com/api/sleep`)
        .then(res => {
            console.log(res)
            dispatch({ type: GET_SLEEP_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_SLEEP_FAILURE, payload: err.response }));
}

export const addSleep = sleep => dispatch => {
    dispatch({ type: ADD_SLEEP_START });
    axios
        .post(`http://api.healthkpis.com/api/sleep`, sleep)
        .then(res => {
            console.log(res)
            dispatch({ type: ADD_SLEEP_SUCCESS, payload: sleep })
            // need to see if this is a bad idea -- using sleep here
        })
        .catch(err => dispatch({ type: ADD_SLEEP_FAILURE, payload: err.response }))
}