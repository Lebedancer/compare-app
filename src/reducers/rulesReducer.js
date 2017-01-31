import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rulesReducer(state = initialState.rules, action) {
    switch (action.type) {
        case types.LOAD_RULES_START:
            return {...state, loading: true };
        case types.LOAD_RULES_SUCCESS:
            return initialState.rules = {...state.list, list: action.rules};
       default:
            return state;
    }

}
