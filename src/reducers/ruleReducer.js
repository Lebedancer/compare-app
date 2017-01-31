import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ruleReducer(state = initialState.rule, action) {
    switch (action.type) {
        case types.LOAD_RULE_START:
            return {...state, loading: true};
        case types.LOAD_RULE_SUCCESS:
            return { ...state, ...action.rule, loading: false };
        case types.UPDATE_RULE_SUCCESS:
            return { ...state, ...action.rule };
       default:
            return state;
    }

}
