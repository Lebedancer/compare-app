import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';

import MdCloseLink from '../../common/MdCloseLink';
import style from './style.css';


const RuleListItem = ({ data })=>{

    function _onClick(e) {
        e.preventDefault();

        const href = _getHref(data.Id);
        browserHistory.push(href);
    }

    function _getHref(id) {
        return `/rule/${id}`
    }

    return (
        <li className={style.item}><a href={_getHref(data.Id)} onClick={_onClick}>{data.Name}</a><MdCloseLink /></li>
    )
};



export default RuleListItem;