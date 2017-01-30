import React, {PropTypes} from 'react';
// import style from './style.css';
import ItemsList from '../ItemsList';

class KontragentsSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(id) {
        const props = this.props;
        const list = props.list;
        const newList = list.filter(obj => obj.Id !== id);

        return props.onChange({ Kontragents: newList});
    }

    render() {
        const props = this.props;
        return (
            <div>
                <div className={props.titleClass}>Контрагенты, для которых нужно применять данное
                    правило:
                </div>
                <ItemsList list={props.list} onRemove={this.removeItem}/>
            </div>
        );
    }
}

KontragentsSection.propTypes = {
    list: PropTypes.array.isRequired
};

export default KontragentsSection;