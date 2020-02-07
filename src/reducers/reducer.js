import {
    GET_SLEEP_START,
    GET_SLEEP_SUCCESS,
    GET_SLEEP_FAILURE,
    ADD_SLEEP_START,
    ADD_SLEEP_SUCCESS,
    ADD_SLEEP_FAILURE,
    ADD_EXPERIMENT
} from '../actions/actions';

const initialState = {
    sleepEntries: [
        // {
        //     summary_date: '2019-12-12',
        //     score_total: 76,
        //     bedtime_start: '2019-12-11T02:13:19+02:00',
        //     duration: 27945
        // }
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
    ],
    isTransmitting: null
}

export const sleepReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case GET_SLEEP_START:
            return {
                ...state,
                isTransmitting: true
            };
        case GET_SLEEP_SUCCESS:
            return {
                ...state,
                isTransmitting: false,
                error: '',
                sleepEntries:
                    action.payload
            };
        case GET_SLEEP_FAILURE:
            return {
                ...state,
                isTransmitting: false,
                error: action.payload
            };
        case ADD_SLEEP_START:
            return {
                ...state,
                isTransmitting: true
            }
        case ADD_SLEEP_SUCCESS:
            return {
                ...state,
                sleepEntries: [
                    ...state.sleepEntries,
                    action.payload
                ]
            };
        case ADD_SLEEP_FAILURE:
            return {
                ...state,
                isTransmitting: false,
                error: action.payload
            };

        // case ADD_SLEEP:
        //     // const { durationHours, durationMinutes, ...rest } = action.payload

        //     const newPayload = { ...action.payload, seconds: action.payload.durationHours * 3600 + action.payload.durationMinutes * 60 }
        //     console.log(newPayload)
        //     return {
        //         ...state,
        //         sleepEntries: [
        //             ...state.sleepEntries,
        //             newPayload
        //         ]
        //     };
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