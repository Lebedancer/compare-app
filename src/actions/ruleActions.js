import * as types from './actionTypes';
import appService from '../services/appService';

export function loadRuleSuccess(rule) {
    return { type: types.LOAD_RULE_SUCCESS, rule };
}

export function loadRulesSuccess(rules) {
    return { type: types.LOAD_RULES_SUCCESS, rules };
}

export function startSaveRule() {
    return { type: types.START_SAVE_RULE };
}

export function saveRuleSuccess(rule) {
    return { type: types.SAVE_RULE_SUCCESS, rule };
}

export function loadRule() {
    return function(dispatch) {
        return appService.get()
            .then(rule => {
                dispatch(loadRuleSuccess(rule));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function loadRules() {
    return function(dispatch) {
        return appService.getList()
            .then(rules => {
                dispatch(loadRulesSuccess(rules));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function saveRule(rule) {
    return function(dispatch) {
        return appService.save(rule)
            .then(rule => {
                dispatch(saveRuleSuccess(rule));
            })
            .catch(error => {
                throw(error);
            });
    };
}


