import React from 'react';

const ListIndexItem = props => {
    return (
        <div className="list-index-item">
            <div className="list-index-item-header">
                <h3>{props.list.title}</h3>
                <a onClick={() => props.openModalWithItem('edit-list', props.list)}><i className="fas fa-pencil-alt"></i></a>
            </div>
        </div>
    )
};

export default ListIndexItem;