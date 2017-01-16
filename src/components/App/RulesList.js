import React, {PropTypes} from 'react';

import style from './style.css';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={style.list__page}>
                {this.props.children}
            </div>);
    }
}

export default App;