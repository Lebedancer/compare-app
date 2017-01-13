const headers = {
    headers: {
        Accept: 'application/json',
        pragma: 'no-cache',
        'cache-control': 'no-cache'
    },
    credentials: 'same-origin',
    'Content-Type': 'application/json'
};

class ruleService {
    get() {
        return fetch('/get', headers)
            .then(response => {
                return response.json();
            });
    }

    save(rule) {
        return fetch('/save', Object.assign({}, headers, {method: 'post'}))
            .then(()=> {
                return rule;
            });
    }
}

export default new ruleService();