import { connect } from 'react-redux';
import { openModal, openModalWithItem } from '../../actions/modal_actions';
import CardIndex from './card_index';

import { fetchCards, destroyCard, updateCard } from '../../actions/card_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return { 
        cards: Object.values(ownProps.cards).filter( card => 
        card.listId === ownProps.listId
    ),
    boardId: state.entities.boards[ownProps.match.params.id]
}
};

const mapDispatchToProps = dispatch => ({
    fetchCards: (listId) => dispatch(fetchCards(listId)),
    openModal: modal => dispatch(openModal(modal)),
    openModalWithItem: (modal, item) => dispatch(openModalWithItem(modal, item)),
    destroyCard: cardId => dispatch(destroyCard(cardId)),
    updateCard: card => dispatch(updateCard(card))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardIndex));