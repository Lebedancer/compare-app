import React, { PropTypes } from 'react';
import style from './style.css';

const MdCloseLink = ({ className, onClick })=> {
    const additionClass = className ? className : '';
    const classes = `${style.mdCloseLink} ${additionClass}`;

    return (
        <i className={classes} onClick={onClick}></i>
    );
};

MdCloseLink.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default MdCloseLink;