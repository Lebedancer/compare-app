import React, { PropTypes } from 'react';
import style from './style.css';

const LineNumber = ({ number })=> {
    return (
        <i className={style.lineNumber}>{number}</i>
    );
};

LineNumber.propTypes = {
    number: PropTypes.string.isRequired
};

export default LineNumber;