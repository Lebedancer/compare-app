import Validate from 'validate.js';

export default class ValidationService {
    constructor({data, rules}) {
        this.defaultData = data;
        this.rules = rules;
    }

    setDefaultData(data) {
        this.defaultData = data;
    }

    getMessage(field, data) {
        let message = '';
        if (!this.rules) {
            return;
        }

        const rule = this.rules[field];
        const currentVal = data[field];

        if (rule && (this._isValueChange({ field, currentVal }) || this.fullValidation)) {
            message =  Validate.single(currentVal, rule);
        }

        return message && message[0];
    }

    isValid(data) {
        this.fullValidation = true;
        return !Validate.validate(data, this.rules);
    }

    _isValueChange({ field, currentVal }) {
        if (this.defaultData) {
            const defaultValue = this.defaultData[field];
            return currentVal !== defaultValue;
        } else {
            return false;
        }
    }
}
