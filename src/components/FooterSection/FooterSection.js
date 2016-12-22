import React, {PropTypes} from 'react';
import MdButton from '../common/MdButton';
import style from './style.css';

class FooterSection extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { loading, onSave } = this.props;

        return (
            <div className={style.footer}>
                <MdButton onClick={onSave} title="Сохранить" loading={loading} />
                <a>Отмена</a>
            </div>
        );
    }
}

// FooterSection.propTypes = {
//     list: PropTypes.array.isRequired
// };

export default FooterSection;