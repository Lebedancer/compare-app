import { combineReducers } from 'redux';
import ruleReducer from './ruleReducer';
import rulesReducer from './rulesReducer';

const rootReducer = combineReducers({
    ruleReducer,
    rulesReducer
});

export default rootReducer;
