import React from 'react';

import CardIndexItem from './card_index_item';



class CardIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: this.props.cards
        }
    }

    componentDidMount() {
        this.props.fetchCards(this.props.listId);
    }

    render() {
        if (!this.props.cards) return null

        let orderedCards = this.props.cards.sort((a, b) => (a.order > b.order) ? 1 : -1)

        return (
      
                
   
                        <div className="card-index-container">
                            <div className="card-index-items">
                                {
                                    orderedCards.map((card,idx) =>
                                        <CardIndexItem
                                            card={card}
                                            key={card.id}
                                            list={this.props.list}
                                            openModalWithItem={this.props.openModalWithItem}
                                            destroyCard={this.props.destroyCard}
                                            fetchCards={this.props.fetchCards}
                                            listId={this.props.listId}
                                            history={this.props.history}
                                            boardId={this.props.boardId}
                                            index={idx}
                                            >


                                        </CardIndexItem>
                                    )
                                }
                         
                            </div>
                        </div>

        )

    }
};

export default CardIndex;