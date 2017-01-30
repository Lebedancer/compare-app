import React, {PropTypes} from 'react';
import style from './style.css';
import ListItemView from './ListItemView';

class ItemsList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const props = this.props;
        return (
            <div>
                <ul className={style.itemsList}>
                    {props.list.map(item =>
                        <ListItemView key={item.Id} data={item} onRemove={props.onRemove}/>
                    )}
                </ul>
                {/*<a onClick={}></a>*/}
            </div>
        );
    }
}

ItemsList.propTypes = {
    list: PropTypes.array,
    onRemove: PropTypes.func
};

export default ItemsList;