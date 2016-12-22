import React, {PropTypes} from 'react';

class FooterSection extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onSave}>Сохранить</button>
                <a>Отмена</a>
            </div>
        );
    }
}

// FooterSection.propTypes = {
//     list: PropTypes.array.isRequired
// };

export default FooterSection;