import { connect } from 'react-redux';
import { openModal, openModalWithItem } from '../../actions/modal_actions';
import ListIndex from './list_index';
import { fetchCards, updateCards } from '../../actions/card_actions';

import { fetchLists, destroyList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
    return {
    lists: Object.values(state.entities.lists),
    boardId: ownProps.boardId,
    cards: state.entities.cards
}
};

const mapDispatchToProps = dispatch => ({
    fetchLists: (boardId) => dispatch(fetchLists(boardId)),
    openModal: modal => dispatch(openModal(modal)),
    openModalWithItem: (modal, item) => dispatch(openModalWithItem(modal, item)),
    destroyList: listId => dispatch(destroyList(listId)),
    fetchCards: (listId) => dispatch(fetchCards(listId)),
    updateCards: card => dispatch(updateCards(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);