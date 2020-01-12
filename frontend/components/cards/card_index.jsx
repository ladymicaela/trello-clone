import React from 'react';

import CardIndexItem from './card_index_item';

class CardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        if (!this.props.cards) return null

        let orderedCards = this.props.cards.sort((a, b) => (a.order > b.order) ? 1 : -1)

        return (
            <div className="card-index-container">
                <div className="card-index-items">
                    {
                        orderedCards.map(card =>
                            <CardIndexItem
                                card={card}
                                key={card.id}
                                openModalWithItem={this.props.openModalWithItem}
                                destroyCard={this.props.destroyCard}
                                fetchCards={this.props.fetchCards}
                            />
                        )
                    }
                    <div className="create-card-index-item">
                        <a onClick={() => this.props.openModal('create-card')}><i className="fas fa-plus"></i>Add another card</a>
                    </div>
                </div>
            </div>
        )

    }
}