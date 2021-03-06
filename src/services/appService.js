import React, {PropTypes} from 'react';

const headers = {
    headers: {
        Accept: 'application/json',
        pragma: 'no-cache',
        'cache-control': 'no-cache'
    },
    credentials: 'same-origin',
    'Content-Type': 'application/json'
};

class AppService {
    getList() {
        return fetch('/getList', headers)
            .then(response => {
                return response.json();
            });
    }

    get() {
        return fetch('/get', headers)
            .then(response => {
                return response.json();
            });
    }

    save() {
        return fetch('/save', Object.assign({}, headers, {method: 'post'}));
    }
}

export default new AppService();