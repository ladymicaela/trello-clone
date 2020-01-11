import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST} from '../actions/list_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';

const listsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state );

    switch (action.type) {
        case RECEIVE_LISTS:
            return action.lists
        case RECEIVE_LIST:
            return action.list.lists
        case REMOVE_LIST:
            delete nextState[action.listId];
            return nextState
        case RECEIVE_BOARD:
            return action.board.lists
        default:
            return state;
    }
};

export default listsReducer;