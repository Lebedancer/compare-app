import React, {PropTypes} from 'react';

import LineNumber from '../common/LineNumber';
// import KontragentsSection from '../KontragentsSection';
// import appService from './appService';
// import MdInput from '../common/MdInput';
// import Loader from 'react-loader';
// import validationRules from './validationRules';
// import ValidationService from '../../services/ValidationService';
// import FooterSection from '../FooterSection';

import style from './style.css';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: true
        };
    }

    render() {


        return (
            <div className={style.app}>
                <LineNumber number="1"/>
            </div>);
    }
}

export default App;