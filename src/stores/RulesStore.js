import appService from '../services/appService';
import {observable} from "mobx";

class RulesStore {
    @observable rules = [];
    @observable loading = true;

    async getData() {
        this.loading = true;
        this.rules = await appService.getList();
        this.loading = false;
    }
}

export default RulesStore