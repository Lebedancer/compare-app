import React, {PropTypes} from 'react';
import MdCloseLink from '../../../common/MdCloseLink';
import style from './style.css';

class ListItemView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        this.props.onRemove(this.props.data.Id);
    }

    render() {
        const Name = this.props.data.Name;
        return (
            <li className={style.itemView}>{Name}<MdCloseLink onClick={this._onClick}/></li>
        );
    }
}

ListItemView.propTypes = {
    data: PropTypes.object.isRequired,
    onRemove: PropTypes.func
};


export default ListItemView;