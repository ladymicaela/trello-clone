import { connect } from 'react-redux';
import { openModal, openModalWithItem } from '../../actions/modal_actions';
import CardIndex from './card_index';

import { fetchCards, destroyCard, updateCard } from '../../actions/card_actions';

const mapStateToProps = state => ({
    cards: Object.values(state.entities.cards)
});

const mapDispatchToProps = dispatch => ({
    fetchCards: () => dispatch(fetchCards()),
    openModal: modal => dispatch(openModal(modal)),
    openModalWithItem: (modal, item) => dispatch(openModalWithItem(modal, item)),
    destroyCard: card => dispatch(destroyCard(card)),
    updateCard: card => dispatch(updateCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);