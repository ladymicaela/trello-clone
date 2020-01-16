import React from 'react';
import merge from 'lodash/merge'

import { DragDropContext } from 'react-beautiful-dnd';

import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: this.props.cards,
            lists: this.props.lists
        }
        this.onDragEnd = this.onDragEnd.bind(this);
    
    }


    componentDidMount() {
        this.props.fetchLists(this.props.boardId); 
    }

    onDragEnd(result) {
        const { destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index == source.index
        ) {
            return;
        }

        let nextState = merge({}, this.props.cards)

        nextState[draggableId].order = destination.index
        nextState[draggableId].listId = parseInt(destination.droppableId)

        let cardObj = {
            ["list_id"]: parseInt(destination.droppableId),
            ["order"]: destination.index,
            ["due_date"]: nextState[draggableId].dueDate,
            ["title"]: nextState[draggableId].title,
            ["id"]: nextState[draggableId].id,
            ["description"]: nextState[draggableId].description
        }


    
        this.setState(
            {cards: {
                draggableId: {cardObj}
            }}
        )

   

        this.props.updateCards(cardObj)

        //destination.droppableId = list id
        //draggableId = card.id

        //source.index = original order of the card
        //destination.index = new order of the card
    }

    render() {
        
        if (!this.props.lists || !this.props.cards) return null

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
