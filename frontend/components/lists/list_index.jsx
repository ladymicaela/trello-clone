import React from 'react';
import merge from 'lodash/merge'

import { DragDropContext } from 'react-beautiful-dnd';

import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props}
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidUpdate(prevProps) {
       
        if (Object.keys(prevProps.cards).length === 0 && Object.keys(this.props.cards).length !== 0) {
            this.setState(this.props)
        }
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

        //below is attempt to persist to state

        let renderState = merge({}, this.props.cards)

        let startListId = parseInt(source.droppableId)
        let cardStartIndex = source.index

        let endListId = parseInt(destination.droppableId)
        let cardEndIndex = destination.index

        Object.values(this.props.cards).forEach(card => {
            if (card.listId === startListId && card.order > cardStartIndex && card.id !== draggableId) {
                renderState[card.id] = {
                    id: card.id,
                    title: card.title,
                    description: card.description,
                    dueDate: card.dueDate,
                    order: card.order - 1,
                    listId: startListId
                }
            } else if (card.listId === endListId && card.order >= cardEndIndex && card.id !== draggableId) {
                renderState[card.id] = {
                    id: card.id,
                    title: card.title,
                    description: card.description,
                    dueDate: card.dueDate,
                    order: card.order + 1,
                    listId: endListId
                }
            }
        });

        renderState[draggableId] = {
            id: parseInt(draggableId),
            title: renderState[draggableId].title,
            description: renderState[draggableId].description,
            dueDate: renderState[draggableId].dueDate,
            order: cardEndIndex,
            listId: endListId
        }

        this.setState({cards: renderState})

        //below is how we update DB

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

    
        this.props.updateCards(cardObj)

        //destination.droppableId = list id
        //draggableId = card.id

        //source.index = original order of the card
        //destination.index = new order of the card
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
                                    cards={this.state.cards}
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
