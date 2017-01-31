import { extendObservable } from 'mobx';
import appService from '../services/appService';

class RulesStore {
    constructor() {
        extendObservable(this, {
            rules: [],
            loading: true
        })
    }

    async getData() {
        this.loading = true;
        this.rules = await appService.getList();
        this.loading = false;
    }
}

export default RulesStore