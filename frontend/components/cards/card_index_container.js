import { connect } from 'react-redux';
import { openModal, openModalWithItem } from '../../actions/modal_actions';
import CardIndex from './card_index';

import { fetchCards, destroyCard, updateCard } from '../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
    return { 
        cards: Object.values(state.entities.cards).filter( card => 
        card.listId === ownProps.listId
    )}
};

const mapDispatchToProps = dispatch => ({
    fetchCards: (listId) => dispatch(fetchCards(listId)),
    openModal: modal => dispatch(openModal(modal)),
    openModalWithItem: (modal, item) => dispatch(openModalWithItem(modal, item)),
    destroyCard: cardId => dispatch(destroyCard(cardId)),
    updateCard: card => dispatch(updateCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);