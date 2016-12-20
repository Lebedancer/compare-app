import React, {PropTypes} from 'react';
import style from './style.css';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            style
        };
    }

    render() {
        const style = this.state.style;

        return (<div className={style.app}>
            <h1>Новое правило</h1>
            <ul>
                <li>
                    <div>Тип операции, который должен определиться:</div>
                    <div><input type="text"/></div>
                </li>
                <li>Ключевые слова в Назначении платежа:</li>
                <li>
                    Контрагенты, для которых нужно применять данное правило:
                    <select name="" id="">
                        <option value="1">Все</option>
                        <option value="2">Все кроме</option>
                        <option value="3">Выборочно</option>
                    </select>
                </li>
                <li>
                    Расчетные счета, для которых нужно применять данное правило:
                    <select name="" id="">
                        <option value="1">Все</option>
                        <option value="2">Все кроме</option>
                        <option value="3">Выборочно</option>
                    </select>
                </li>
                <li>
                    <div>Название правила:</div>
                    <div><input type="text"/></div>
                </li>
            </ul>
        </div>);
    }
}

export default App;