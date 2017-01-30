import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ruleActions from '../../actions/ruleActions';
import Loader from 'react-loader';
import RuleListItem from './RuleListItem';
import MdButton from '../common/MdButton';

import { browserHistory } from "react-router";

import style from './style.css';

class RulesList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this._createNewRule = this._createNewRule.bind(this);
    }

    componentWillMount() {
        this.props.actions.loadRules();
    }

    _createNewRule() {
        browserHistory.push('/rule');
    }

    render() {
        const rules = this.props.data;

        return (
            <div className={style.list__page}>
                { !rules ? <Loader /> :
                    <div>
                        <h1>Список правил</h1>
                        <ul className={style.list}>
                            { rules.map((rule) =>
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

function mapStateToProps(state, ownProps) {
    let data;

    if (state.ruleReducer.length) {
        data = state.ruleReducer;
    }

    return {
        data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ruleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RulesList);