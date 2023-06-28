import { combineReducers } from 'redux';
import { countReducer } from './reducers/countReducer';

const rootReducer = combineReducers({
    counter: countReducer,
});

export default rootReducer;