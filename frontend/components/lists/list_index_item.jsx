import React from 'react';

const ListIndexItem = props => {
    return (
        <div className="list-index-item">
            <div className="list-index-item-header">
                <h3>{props.list.title}</h3>
                <a onClick={() => this.props.openModalWithItem('edit-list', this.props.list)}>Edit List<i className="fas fa-plus"></i></a>
            </div>
        </div>
    )
};

export default ListIndexItem;