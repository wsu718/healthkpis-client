import { combineReducers } from 'redux';

// import reducers
import healthReducer from './healthReducer';

// join all reducers together
export const rootReducer = combineReducers({
    healthReducer
})