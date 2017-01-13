import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { loadRule } from './actions/ruleActions';
import {Provider} from 'react-redux';

import App from './components/App';

const store = configureStore();

store.dispatch(loadRule());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);