import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ruleReducer(state = initialState.rule, action) {
    switch (action.type) {
        case types.LOAD_RULE_SUCCESS:
            return action.rule;
        case types.SAVE_RULE_SUCCESS:
            return [
                ...state, Object.assign({}, action.rule)
            ];
       default:
            return state;
    }

}
