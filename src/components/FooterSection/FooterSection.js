import React from 'react';
import MdButton from '../common/MdButton';
import style from './style.css';

class FooterSection extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { loading, onSave, onCancel } = this.props;

        return (
            <div className={style.footer}>
                <MdButton onClick={onSave} title="Сохранить" loading={loading} />
                <a onClick={onCancel}>Отмена</a>
            </div>
        );
    }
}


export default FooterSection;