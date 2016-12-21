import React, {PropTypes} from 'react';

import LineNumber from '../common/LineNumber';
import KontragentsSection from '../KontragentsSection';
import appService from './appService';
import MdInput from '../common/MdInput';
import Loader from 'react-loader';

import style from './style.css';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: true
        };

        this._onChange = this._onChange.bind(this);
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
    }

    _onChange(data) {
        const state = this.state.data;
        this.setState({ data: Object.assign({}, state, data)});
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
                                <MdInput/>
                            </li>
                        </ul>
                    </div>
                }
            </div>);
    }
}

export default App;