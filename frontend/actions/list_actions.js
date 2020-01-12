import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'LIST_ERRORS';
export const CLEAR_LIST_ERRORS = 'CLEAR_LIST_ERRORS';

const receiveLists = lists => ({
    type: RECEIVE_LISTS,
    lists
});

const receiveList = list => ({
    type: RECEIVE_LIST,
    list
});

const removeList = listId => ({
    type: REMOVE_LIST,
    listId
});

const receiveListErrors = errors => ({
    type: RECEIVE_LIST_ERRORS,
    errors
});

const clearListErrors = () => ({
    type: CLEAR_LIST_ERRORS
});

export const fetchLists = () => dispatch => (
    ListAPIUtil.fetchLists()
        .then(lists => dispatch(receiveLists(lists)))
);

export const fetchList = listId => dispatch => (
    ListAPIUtil.fetchList(listId)
        .then(list => dispatch(receiveList(list)))
);

export const createList = list => dispatch => (
    ListAPIUtil.createList(list)
        .then(list => {
            dispatch(receiveList(list));
            dispatch(clearListErrors());
        },
            errors => dispatch(receiveListErrors(errors.responseJSON))
        )
);

export const updateList = list => dispatch => (
    ListAPIUtil.updateList(list)
        .then(list => dispatch(receiveList(list)))
);

export const destroyList = listId => dispatch => (
    ListAPIUtil.destroyList(listId)
        .then( () => dispatch(removeList(listId)))
);