import 'babel-polyfill';
import configureStore from './store/configureStore';
import {loadRule} from './actions/ruleActions';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

const store = configureStore();

store.dispatch(loadRule());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);