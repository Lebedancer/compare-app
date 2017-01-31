import * as types from './actionTypes';
import appService from '../services/appService';

export function loadRulesSuccess(rules) {
    return { type: types.LOAD_RULES_SUCCESS, rules };
}

export function loadRulesStart() {
    return { type: types.LOAD_RULES_START };
}

export function loadRules() {
    return function(dispatch) {
        dispatch(loadRulesStart());
        return appService.getList()
            .then(rules => {
                dispatch(loadRulesSuccess(rules));
            })
            .catch(error => {
                throw(error);
            });
    };
}

