import React from 'react';

import {Draggable} from 'react-beautiful-dnd';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let description;
        let dueDate;

        if (this.props.card.description) {
            description = "fas fa-align-justify"
        }

        if (this.props.card.dueDate) {
            dueDate = "far fa-clock"
        }
        
        if (!this.props.card) return null

        return(
            
            <Draggable draggableId={`${this.props.card.id}`} index={this.props.index} >
                {(provided) => (
                    <div className="card-index-item" 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                        <a onClick={() => this.props.openModalWithItem('show-card', this.props.card)}>{this.props.card.title}
                            <div className="card-alert-icons">
                                <i className={description}></i>
                                <i className={dueDate}></i>
                            </div>
                        </a>
                    </div>
                )}
            </Draggable>

        )
    }
};

export default CardIndexItem;