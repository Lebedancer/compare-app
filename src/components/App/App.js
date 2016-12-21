import React, {PropTypes} from 'react';

import LineNumber from '../common/LineNumber';
import KontragentsSection from '../KontragentsSection';

import style from './style.css';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state ={
            Id: 0,
            Name: '',
            OperationType: 0,
            Keywords: [],
            Kontragents: [
                { Id: 1, Name: 'Kontragent1'},
                { Id: 2, Name: 'Kontragent2'},
                { Id: 3, Name: 'Kontragent3'},
                { Id: 4, Name: 'Kontragent4'}
            ],
            KontragentUsageMode: 0,
            SettlementAccounts: [],
            SettlementAccountUsageMode: 0
        };

        this._onChange = this._onChange.bind(this);
    }

    _onChange(data) {
        const state = this.state;
        this.setState(Object.assign({}, state, data));
    }

    render() {
        const titleClassName = `${style['md-row--form']} ${style['app__listHeader']}`;

        return (
            <div className={style.app}>
                <h1>Новое правило</h1>
                <ul className={style.app__list}>
                    <li>
                        <LineNumber number="1"/>
                        <div className={titleClassName}>Тип операции, который
                            должен определиться:
                        </div>
                        <div><input type="text"/></div>
                    </li>
                    <li>
                        <LineNumber number="2"/>
                        <div className={titleClassName}>Ключевые слова в Назначении платежа:</div>
                    </li>
                    <li>
                        <LineNumber number="3"/>
                        <div className={titleClassName}>Контрагенты, для которых нужно применять данное
                            правило:
                        </div>
                        <KontragentsSection list={this.state.Kontragents} onChange={this._onChange}/>
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
                        <div></div>
                    </li>
                </ul>
            </div>);
    }
}

export default App;