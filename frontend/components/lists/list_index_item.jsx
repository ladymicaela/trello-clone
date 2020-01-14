import React from 'react';
import CardIndexContainer from '../cards/card_index_container';

class ListIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list
        this.destroyList = this.destroyList.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchCards(this.props.list.id)
    }
   
    destroyList() {
        this.props.destroyList(this.state.id)
            .then( () => this.props.fetchLists(this.props.boardId) )
    }

    render() {
        
        if (!this.props.list) return null
      
        return(
                <div className="list-index-item">
                    <div className="list-index-item-header">
                        <h3>{this.props.list.title}</h3>
                        <div className="list-index-actions">
                            <a onClick={() => this.props.openModalWithItem('edit-list', this.state)}><i className="fas fa-pencil-alt"></i></a>
                            <button onClick={this.destroyList}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                    <CardIndexContainer listId={this.props.list.id} />
                    <div className="create-card-index-item">
                        <a onClick={() => this.props.openModalWithItem('create-card', this.props.list)}><i className="fas fa-plus"></i>Add another card</a>
                    </div>
                </div>
            )
    
        }
    
    };
    
export default ListIndexItem;