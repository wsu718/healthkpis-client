import {
    GET_HEALTH_START,
    GET_HEALTH_SUCCESS,
    GET_HEALTH_FAILURE,
    ADD_HEALTH_START,
    ADD_HEALTH_SUCCESS,
    ADD_HEALTH_FAILURE,
    DELETE_HEALTH_START,
    DELETE_HEALTH_SUCCESS,
    DELETE_HEALTH_FAILURE,
    GET_HEALTHBYDATE_START,
    GET_HEALTHBYDATE_SUCCESS,
    GET_HEALTHBYDATE_FAILURE,
    UPDATE_HEALTH_START,
    UPDATE_HEALTH_SUCCESS,
    UPDATE_HEALTH_FAILURE,
    GET_HEALTHWEEKS_START,
    GET_HEALTHWEEKS_SUCCESS,
    GET_HEALTHWEEKS_FAILURE
} from "../actions";

const initialState = {
    isFetchingData: false,
    isLoading: false,
    error: '',
    health: [
    ],
    weeks: [

    ]
};

const healthReducer = (state = initialState, action) => {
    // console.log(state, action)
    switch (action.type) {
        case GET_HEALTH_START:
            return {
                ...state,
                isFetchingData: false
            };
        case GET_HEALTH_SUCCESS:
            return {
                ...state,
                isFetchingData: true,
                error: '',
                health: action.payload
            };
        case GET_HEALTH_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        case GET_HEALTHBYDATE_START:
            return {
                ...state,
                isFetchingData: false
            };
        case GET_HEALTHBYDATE_SUCCESS:
            return {
                ...state,
                isFetchingData: true,
                error: '',
                // health: [
                //     ...state.health,
                //     action.payload[0]
                // ],
                healthByDate: action.payload[0]
            };
        case GET_HEALTHBYDATE_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case ADD_HEALTH_START:
            return {
                ...state,
                isFetchingData: true
            };
        case ADD_HEALTH_SUCCESS:
            return {
                ...state,
                health: [
                    ...state.health,
                    action.payload
                ]
            };
        case ADD_HEALTH_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        case DELETE_HEALTH_START:
            return {
                ...state,
                isFetchingData: true,
            };
        case DELETE_HEALTH_SUCCESS:
            return {
                ...state,
                isFetchingData: false,
                health: [
                    ...state.health.filter(health => health.id !== action.payload)
                ]
            };
        case DELETE_HEALTH_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        case UPDATE_HEALTH_START:
            return {
                ...state,
                isFetchingData: true
            };
        case UPDATE_HEALTH_SUCCESS:
            return {
                ...state,
                health: state.health.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...action.payload }
                    }
                    return item
                })
            };
        case UPDATE_HEALTH_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        case GET_HEALTHWEEKS_START:
            return {
                ...state,
                isFetchingData: false
            };
        case GET_HEALTHWEEKS_SUCCESS:
            return {
                ...state,
                isFetchingData: true,
                error: '',
                weeks: action.payload
            };
        case GET_HEALTHWEEKS_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default healthReducer;