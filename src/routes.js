import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App';
import RulesList from './components/RulesList';
import Rule from './components/Rule';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={RulesList} />
        <Route path="/rule/:id" component={Rule} />
    </Route>
);