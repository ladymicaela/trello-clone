import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD} from '../actions/board_actions';

const boardsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state );

    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards
        case RECEIVE_BOARD:
            return Object.assign({}, nextState, action.board.id)
        case REMOVE_BOARD:
            delete nextState.boards[action.board.id];
            return nextState;
        default:
            return state;
    }
};

export default boardsReducer;