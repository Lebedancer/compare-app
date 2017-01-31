import { extendObservable } from 'mobx';
import appService from '../services/appService';

class RuleStore {
    @observable  rule = {
        Kontragents: [],
        Name: '',
    };
    @observable saving = false;
    @observable uploadRule = {};
    @observable loading = false;

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