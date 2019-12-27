import { ADD_SLEEP } from '../actions/sleepActions';

const initialState = {
    sleepEntries: [
        {
            duration: 6.45,
            score: 5,
            bedtime: 10.25,
            date: 101020
        }
    ]
}

export const sleepReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_SLEEP:
            return {
                ...state,
                sleepEntries: [
                    ...state.sleepEntries,
                    action.payload
                ]
            }
        default:
            return state;
    }
}