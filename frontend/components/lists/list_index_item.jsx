import React from 'react';
import CardIndexContainer from '../cards/card_index_container';
import CreateCardFormContainer from '../cards/create_card_form_container'

// const ListIndexItem = props => {
//     return (
//         <div className="list-index-item">
//             <div className="list-index-item-header">
//                 <h3>{props.list.title}</h3>
//                 <div className="list-index-actions">
//                     <a onClick={() => props.openModalWithItem('edit-list', props.list)}><i className="fas fa-pencil-alt"></i></a>
//                     <button onClick={ () => props.destroyList(props.list.id)}>
//                         <i className="fas fa-trash-alt"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default ListIndexItem;

class ListIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list
        this.destroyList = this.destroyList.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchCards()
    }
    
    destroyList() {
        this.props.destroyList(this.state.id)
            .then( (boardId) => this.props.fetchLists(this.props.boardId) )
    }

    render() {
        
        if (!this.props.list) return null
        // if (!this.props.cards) return null

        return(
            <div className="list-index-item">
                <div className="list-index-item-header">
                    <h3>{this.state.title}</h3>
                    <div className="list-index-actions">
                        <a onClick={() => this.props.openModalWithItem('edit-list', this.state)}><i className="fas fa-pencil-alt"></i></a>
                        <button onClick={this.destroyList}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                {/* <CardIndexContainer /> */}
                <div className="create-card-index-item">
                    <a onClick={() => this.props.openModal('create-card')}><i className="fas fa-plus"></i>Add another card</a>
                </div>
            </div>
        )
    }

};

export default ListIndexItem;