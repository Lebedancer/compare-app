import React, {PropTypes} from 'react';

import MdCloseLink from '../../common/MdCloseLink';
import style from './style.css';


const RuleListItem = ({ data })=>{
    return (
        <li className={style.item}><a href={_getHref(data.Id)}>{data.Name}</a><MdCloseLink /></li>
    )
};

function _getHref(id) {
    return `/rule/${id}`
}

export default RuleListItem;