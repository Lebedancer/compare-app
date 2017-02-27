import template from "./template.html";
import RuleListItem from "./RuleListItem";
import appService from "../../services/appService";

export default {
    template,
    data() {
        return {
            name: '123',
            list: []
        }
    },
    created() {
        appService.getList()
            .then(list => {
                this.list = list;
        })
    },
    components: {
        RuleListItem
    }
};