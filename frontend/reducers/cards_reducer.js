import { RECEIVE_CARDS, RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';
import { RECEIVE_BOARD, RECEIVE_BOARDS } from '../actions/board_actions';

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CARDS:
            return Object.assign({},action.cards)
        case RECEIVE_CARD:
            nextState[action.card.id] = action.card
            return nextState;
        case REMOVE_CARD:
            delete nextState[action.cardId];
            return nextState
        case RECEIVE_BOARD:
            return Object.assign({}, action.board.cards)
        case RECEIVE_BOARDS:
            return {};
        default:
            return state;
    }
};

export default cardsReducer;