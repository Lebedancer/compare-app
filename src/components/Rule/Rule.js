import React, {PropTypes} from 'react';

import LineNumber from '../common/LineNumber';
import KontragentsSection from './KontragentsSection';
import appService from '../../services/appService';
import MdInput from '../common/MdInput';
import Loader from 'react-loader';
import validationRules from './validationRules';
import ValidationService from '../../services/ValidationService';
import FooterSection from './FooterSection';
import { browserHistory } from 'react-router';
import RuleStore from '../../stores/RuleStore';
import { observer } from 'mobx-react'

import style from './style.css';

class Rule extends React.Component {
    constructor(props, context) {
        super(props, context);

        this._onChange = this._onChange.bind(this);
        this._getErrors = this._getErrors.bind(this);
        this._onChangeName = this._onChangeName.bind(this);
        this._onSave = this._onSave.bind(this);
        this._onCancel = this._onCancel.bind(this);

        this.store = new RuleStore();

        this.validationService = new ValidationService({
            rules: validationRules
        });
    }

    componentWillMount() {
        const routeParams = this.props.routeParams;
        const id = routeParams.id;

        if (id) {
            this.getData();
        }
    }

    async getData() {
        await this.store.getData();

        this.validationService.setDefaultData(this.store.rule);
    }

    _onChange(data) {
        this.store.updateRule(data);
    }

    _getErrors(name) {
        return this.validationService.getMessage(name, this.store.rule);
    }

    _onChangeName(event) {
        const val = event.target.value;
        this._onChange({Name: val})
    }

    _onSave() {
        if (this.validationService.isValid(this.store.rule)) {

            this.store.save()
                .then(()=> {
                    this._onCancel();
                })
        } else {
            this.forceUpdate();
        }
    }

    _onCancel() {
        browserHistory.goBack()
    }

    render() {
        const titleClassName = `${style['md-row--form']} ${style['app__listHeader']}`;
        const store = this.store;
        const data = this.store.rule;
        return (
            <div className={style.app}>

                { store.loading ? <Loader /> :
                    <div>
                        <h1>Новое правило</h1>
                        <ul className={style.app__list}>
                            <li>
                                <LineNumber number="1"/>
                                <div className={titleClassName}>Тип операции, который
                                    должен определиться:
                                </div>
                            </li>
                            <li>
                                <LineNumber number="2"/>
                                <div className={titleClassName}>Ключевые слова в Назначении платежа:</div>
                            </li>
                            <li>
                                <LineNumber number="3"/>
                                <KontragentsSection
                                    list={data.Kontragents}
                                    onChange={this._onChange}
                                    titleClass={titleClassName}
                                />
                            </li>
                            <li>
                                <LineNumber number="4"/>
                                <div className={titleClassName}>Расчетные счета, для которых нужно применять данное
                                    правило:
                                </div>
                            </li>
                            <li>
                                <LineNumber number="5"/>
                                <div className={titleClassName}>Название правила:</div>
                                <MdInput error={this._getErrors('Name')} value={data.Name} onChange={this._onChangeName} />
                            </li>
                        </ul>
                        <FooterSection onSave={this._onSave} onCancel={this._onCancel} loading={store.saving}/>
                    </div>
                }
            </div>);
    }
}

export default observer(Rule);