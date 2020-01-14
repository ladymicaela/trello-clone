import { connect } from 'react-redux';
import CardShow from './card_show';
import { fetchCard, fetchCards, destroyCard, updateCard } from '../../actions/card_actions';
import { openModalWithItem, closeModal } from '../../actions/modal_actions';

import React from 'react';

const mapStateToProps = (state, ownProps) => ({
    // card: state.entities.cards[ownProps.match.params.cardId]
});

const mapDispatchToProps = dispatch => ({
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    fetchCards: listId => dispatch(fetchCards(listId)),
    destroyCard: card => dispatch(destroyCard(card)),
    updateCard: card => dispatch(updateCard(card)),
    openModalWithItem: (modal, item) => dispatch(openModalWithItem(modal, item)),
    closeModal: () => dispatch(closeModal()
    )
}
);

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);