import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchLists(this.props.boardId);
    }

    onDragEnd(result) {
        //TODO: reorder our list
    }

    render() {
        
        if (!this.props.lists) return null

        let orderedLists = this.props.lists.sort((a, b) => (a.order > b.order) ? 1 : -1)

        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}>
                <div className="list-index-container">
                    <div className="list-index-items">
                        {
                            orderedLists.map( list => 
                                <ListIndexItem 
                                    list={list} 
                                    key={list.id} 
                                    openModal={this.props.openModal}
                                    openModalWithItem={this.props.openModalWithItem}
                                    destroyList={this.props.destroyList}
                                    fetchLists={this.props.fetchLists}
                                    fetchCards={this.props.fetchCards}
                                    boardId={this.props.boardId}
                                />  
                            )
                        }
                        <div className="create-list-index-item">
                            <a onClick={() => this.props.openModal('create-list')}><i className="fas fa-plus"></i>Add another list</a>
                        </div>
                    </div>
                </div>
            </DragDropContext>
        )
    }
};

export default ListIndex;
