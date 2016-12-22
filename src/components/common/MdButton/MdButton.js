import React, {PropTypes} from 'react';
import style from './style.css';
import Loader from 'react-loader';

class MdButton extends React.Component {
    constructor(props, context) {
        super(props, context);

        this._getLoaderOptions = this._getLoaderOptions.bind(this);
        this._getBodyClass = this._getBodyClass.bind(this);
    }

    _getLoaderOptions() {
        return {
            lines: 8,
            length: 3,
            width: 3,
            radius: 5,
            color: '#fff',
            opacity: 0.5,
            trail: 60
        };
    }

    _getBodyClass() {
        const defaultClass = style['md-button__body'];
        const loadingClass = this.props.loading ? style['md-button__body--loading'] : '';

        return `${defaultClass} ${loadingClass}`;
    }

    render() {
        const { title, loading, onClick } = this.props;

        return (
            <div className={style['md-button']}>
                <button className={this._getBodyClass()} onClick={onClick}>
                    { loading && <Loader options={this._getLoaderOptions()}/> } { title }
                </button>
            </div>
        );
    }
}

MdButton.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string

};

export default MdButton;