import React, {PropTypes} from 'react';

import LineNumber from '../common/LineNumber';
import KontragentsSection from '../KontragentsSection';
import appService from './appService';
import MdInput from '../common/MdInput';
import Loader from 'react-loader';
import validationRules from './validationRules';
import ValidationService from '../../services/ValidationService';
import FooterSection from '../FooterSection';

import style from './style.css';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: true
        };

        this._onChange = this._onChange.bind(this);
        this._getErrors = this._getErrors.bind(this);
        this._onChangeName = this._onChangeName.bind(this);
        this._onSave = this._onSave.bind(this);

        this.validationService = new ValidationService({
            rules: validationRules
        });
    }

    componentWillMount() {
        this.getData();
    }

    async getData() {
        const data = await appService.get();

        this.setState({
            data,
            loading: false
        });

        this.validationService.setDefaultData(data);
    }

    _onChange(data) {
        const state = this.state.data;
        this.setState({ data: Object.assign({}, state, data)});
    }

    _getErrors(name) {
        return this.validationService.getMessage(name, this.state.data);
    }

    _onChangeName(event) {
        const val = event.target.value;
        this._onChange({Name: val})
    }

    _onSave() {
        if (this.validationService.isValid(this.state.data)) {
            this.setState({
                saveProcess: true
            });
        } else {
            this.forceUpdate();
        }
    }

    render() {
        const titleClassName = `${style['md-row--form']} ${style['app__listHeader']}`;
        const state = this.state;
        const data = this.state.data;

        return (
            <div className={style.app}>

                { state.loading ? <Loader /> :
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
                                <MdInput error={this._getErrors('Name')} onChange={this._onChangeName} />
                            </li>
                        </ul>
                        <FooterSection onSave={this._onSave} loading={state.saveProcess}/>
                    </div>
                }
            </div>);
    }
}

export default App;