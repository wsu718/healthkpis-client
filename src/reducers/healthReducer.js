import {
    GET_HEALTH_START,
    GET_HEALTH_SUCCESS,
    GET_HEALTH_FAILURE,
    ADD_HEALTH_START,
    ADD_HEALTH_SUCCESS,
    ADD_HEALTH_FAILURE,
    DELETE_HEALTH_START,
    DELETE_HEALTH_SUCCESS,
    DELETE_HEALTH_FAILURE
} from "../actions";

const initialState = {
    isFetchingData: false,
    isLoading: false,
    error: '',
    health: [
        {
            id: '',
            user_id: "auth0|5e3d8e29d82dd00e84f9bd52",
            summary_date: "2019-12-12",
            score_total: 76,
            bedtime_start: "2019-12-11T02:13:19+02:00",
            duration: 27945,
            readiness: 88,
            hrv: 32,
            rhr: 49,
            weight: 191,
        }
    ],
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
        default:
            return state
    }
};

export default healthReducer;