import { ADD_SLEEP, ADD_EXPERIMENT } from '../actions/actions';

const initialState = {
    sleepEntries: [
        {
            date: '2019-12-12',
            seconds: 0,
            durationHours: 0,
            durationMinutes: 0,
            score: 76,
            bedtime: "22:45"
        },
        {
            date: '2019-12-27',
            seconds: 0,
            durationHours: 0,
            durationMinutes: 0,
            score: 64,
            bedtime: "22:45"
        },
        {
            date: '2019-01-07',
            seconds: 0,
            durationHours: 0,
            durationMinutes: 0,
            score: 32,
            bedtime: "22:45"
        }
    ],
    experiments: [
        {
            date: '2019-12-29',
            experiment: `Don't eat 3 hours before bed`
        },
        {
            date: '2019-12-01',
            experiment: `Go to sleep one hour earlier`
        },
        {
            date: '2019-12-20',
            experiment: `Drink no alcohol`
        }
    ]
}

export const sleepReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_SLEEP:
            // const { durationHours, durationMinutes, ...rest } = action.payload

            const newPayload = { ...action.payload, seconds: action.payload.durationHours * 3600 + action.payload.durationMinutes * 60 }
            console.log(newPayload)
            return {
                ...state,
                sleepEntries: [
                    ...state.sleepEntries,
                    newPayload
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