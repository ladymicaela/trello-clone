import { OPEN_MODAL, OPEN_MODAL_WITH_ITEM, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case OPEN_MODAL_WITH_ITEM:
            // debugger
            // let nextState = {}
            // nextState["modal"] = action.modal;
            // nextState["item"] = action.openModalItem;
            // return nextState;
            let nextState = Object.assign({}, state)
            nextState["modal"] = action.modal;
            nextState["item"] = action.openModalItem;
            return nextState;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalReducer;