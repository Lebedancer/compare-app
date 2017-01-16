import React, {PropTypes} from 'react';

import appService from '../../services/appService'
import Loader from 'react-loader';
import RuleListItem from './RuleListItem';

import style from './style.css';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: true
        };
    }

    componentWillMount() {
        this.getData();
    }

    async getData() {
        const data = await appService.getList();

        this.setState({
            data,
            loading: false
        });
    }

    render() {
        const state = this.state;
        const rules = this.state.data;

        return (
            <div className={style.list__page}>
                { state.loading ? <Loader /> :
                    <div>
                        <h1>Список правил</h1>
                        <ul className={style.list}>
                            { rules.map((rule) =>
                                <RuleListItem key={rule.Id} data={rule}/>
                            )}
                        </ul>
                    </div>
                }
            </div>);
    }
}

export default App;