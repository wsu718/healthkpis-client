export const ADD_SLEEP = 'ADD_SLEEP';

export const addSleep = sleep => {
    return { type: ADD_SLEEP, payload: sleep }
}