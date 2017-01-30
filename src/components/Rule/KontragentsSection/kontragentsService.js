import { get, post } from 'mdCore/HttpClient';

const urls = {
    get: '/Kontragents/Autocomplete/KontragentWithoutIdsAutocomplete'
};

class KontragentsService {
    getList({ value, withoutIds }) {
        return post(urls.get, { query: value, count: 5, withoutIds })
            .then(response => this._parseResponse(response));
    }

    isKontragentsExist() {
        return Md.Data.Preloading.IsKontragentsExist;
    }

    _parseResponse(response) {
        const { Status, List } = response;
        if (Status && List) {
            return this._formatList(List);
        } else {
            throw Error(response);
        }
    }

    _formatList(list) {
        return list.map(item => {
            const { Name } = item;
            return {
                text: Name,
                item
            };
        });
    }
}

export default new KontragentsService();