import {
    GET_HEALTH_START,
    GET_HEALTH_SUCCESS,
    GET_HEALTH_FAILURE,
    GET_HEALTHBYDATE_START,
    GET_HEALTHBYDATE_SUCCESS,
    GET_HEALTHBYDATE_FAILURE,

} from "../actions";

const initialState = {
    isFetchingData: false,
    isLoading: false,
    error: '',
    healthByDate: {},
    health: [
        {
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
            }
        case GET_HEALTH_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
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
                healthByDate: action.payload[0]
            }
        case GET_HEALTHBYDATE_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state
    }
};

export default healthReducer;