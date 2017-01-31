import { extendObservable } from 'mobx';
import appService from '../services/appService';

class RuleStore {
    constructor() {
        extendObservable(this, {
            rule: {
                Kontragents: [],
                Name: '',
            },
            saving: false,
            loading: false,
            uploadRule: {}
        })
    }

    async getData() {
        this.loading = true;
        this.rule = await appService.get();

        this.loading = false;
    }

    updateRule(data) {
        this.rule = {...this.rule, ...data}
    }

    save() {
        this.saving = true;
        return appService.save();
    }
}

export default RuleStore