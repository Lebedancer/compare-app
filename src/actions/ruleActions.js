import * as types from './actionTypes';
import appService from '../services/appService';

export function loadRuleSuccess(rule) {
    return { type: types.LOAD_RULE_SUCCESS, rule };
}

export function loadRulesSuccess(rule) {
    return { type: types.LOAD_RULES_SUCCESS, rule };
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
            .then(rule => {
                dispatch(loadRuleSuccess(rule));
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


