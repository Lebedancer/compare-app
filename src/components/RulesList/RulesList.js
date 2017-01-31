import React, {PropTypes} from 'react';

import Loader from 'react-loader';
import RuleListItem from './RuleListItem';
import MdButton from '../common/MdButton';
import {observer} from 'mobx-react'
import { browserHistory } from "react-router";

import style from './style.css';
import RulesStore from '../../stores/RulesStore';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.store = new RulesStore();

        this._createNewRule = this._createNewRule.bind(this);
    }

    componentWillMount() {
        this.store.getData();
    }

    _createNewRule() {
        browserHistory.push('/rule');
    }

    render() {
        const store = this.store;
        return (
            <div className={style.list__page}>
                { store.loading ? <Loader /> :
                    <div>
                        <h1>Список правил</h1>
                        <ul className={style.list}>
                            { store.rules.map((rule) =>
                                <RuleListItem key={rule.Id} data={rule}/>
                            )}
                        </ul>
                        <footer className={style.list__footer}>
                            <MdButton title="Новое правило" onClick={this._createNewRule}/>
                        </footer>
                    </div>
                }
            </div>);
    }
}

export default observer(App);