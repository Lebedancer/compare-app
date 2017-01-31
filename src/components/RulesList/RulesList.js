import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as rulesActions from '../../actions/rulesActions';
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
        const data = this.props.data;
        const rules = data.list;

        return (
            <div className={style.list__page}>
                { data.loading ? <Loader /> :
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
    return {
        data: state.rulesReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(rulesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RulesList);