import React, {PropTypes} from 'react';
import style from './style.css';

const TextInput = ({ onChange, placeholder, value, error }) => {
    let wrapperClass = style['md-input'];

    if (error) {
        wrapperClass += ' ' + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string

};

export default TextInput;