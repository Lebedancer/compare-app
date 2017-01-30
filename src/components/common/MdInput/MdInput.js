import React, {PropTypes} from 'react';
import style from './style.css';

const MdInput = ({ onChange, placeholder, value, error }) => {

    function getClassName(error) {
        const wrapperClass = style['md-input'];
        const errorClass = error ?  style['md-input--error'] : '';

        return `${wrapperClass} ${errorClass}`
    }
    
    return (
        <div className={getClassName(error)}>
            <input
                type="text"
                className={error && style.validation}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className={style.validation}>{error}</div>}
        </div>
    );
};

MdInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string

};

export default MdInput;