import { ADD_SLEEP, ADD_EXPERIMENT } from '../actions/actions';

const initialState = {
    sleepEntries: [
        {
            date: '2019-12-26',
            durationHours: 7,
            durationMinutes: 5,
            score: 76,
            bedtimeHour: 8,
            bedtimeMinutes: 45,
            bedtimeAMPM: 'PM'
        },
        {
            date: '2019-12-27',
            durationHours: 8,
            durationMinutes: 9,
            score: 64,
            bedtimeHour: 10,
            bedtimeMinutes: 12,
            bedtimeAMPM: 'PM'
        },
        {
            date: '2019-12-29',
            durationHours: 4,
            durationMinutes: 10,
            score: 32,
            bedtimeHour: 10,
            bedtimeMinutes: 0,
            bedtimeAMPM: 'PM'
        }
    ],
    experiments: [
        {
            date: '2019-12-29',
            experiment: 'No alcohol'
        },
        {
            date: '2019-12-20',
            experiment: 'Sleep earlier'
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
            };
        case ADD_EXPERIMENT:
            console.log(state, action);
            return {
                ...state,
                experiments: [
                    ...state.experiments,
                    action.payload
                ]
            };
        default:
            return state;
    }
}