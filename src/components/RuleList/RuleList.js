import template from "./template.html";
import RuleListItem from "./RuleListItem";

export default {
    template,
    data() {
        return {
            list: [
                {
                    Id: 1,
                    Name: 'Rule #1'
                },
                {
                    Id: 2,
                    Name: 'Rule #2'
                }
            ]
        }
    },
    components: {
        RuleListItem
    }
};