export const ADD_SLEEP = 'ADD_SLEEP';
export const ADD_EXPERIMENT = 'ADD_EXPERIMENT';

export const addSleep = sleep => {
    return { type: ADD_SLEEP, payload: sleep }
}

export const addExperiment = experiment => {
    return { type: ADD_EXPERIMENT, payload: experiment }
}