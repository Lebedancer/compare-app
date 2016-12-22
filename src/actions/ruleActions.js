import * as types from './actionTypes';
import ruleService from '../services/ruleService';

export function loadRuleSuccess(rule) {
    return { type: types.LOAD_RULE_SUCCESS, rule };
}

export function saveRuleSuccess(rule) {
    return { type: types.SAVE_RULE_SUCCESS, rule };
}

export function loadCourses() {
    return function(dispatch) {
        return ruleService.get()
            .then(rule => {
                dispatch(loadRuleSuccess(rule));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function saveCourse(rule) {
    return function(dispatch) {
        return ruleService.save(rule)
            .then(rule => {
                dispatch(saveRuleSuccess(rule));
            })
            .catch(error => {
                throw(error);
            });
    };
}


