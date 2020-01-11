import React from 'react';

import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchLists();
    }

    render() {
        if (!this.props.lists) return null

        let orderedLists = this.props.lists.sort((a, b) => (a.order > b.order) ? 1 : -1)

        return (
            <div className="list-index-container">
                <div className="list-index-items">
                    {
                        orderedLists.map( list => 
                            <ListIndexItem 
                                list={list} 
                                key={list.id} 
                                openModalWithItem={this.props.openModalWithItem}
                            />  
                        )
                    }
                    <div className="create-board-index-item">
                        <a onClick={() => this.props.openModal('create-list')}>add another list<i className="fas fa-plus"></i></a>
                    </div>
                </div>
            </div>
        )
    }
};

export default ListIndex;
