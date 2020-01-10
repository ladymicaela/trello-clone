import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'BOARD_ERRORS';
export const CLEAR_BOARD_ERRORS = 'CLEAR_BOARD_ERRORS';

const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
});

const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});

const removeBoard = board => ({
    type: REMOVE_BOARD,
    board
});

const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});

const clearBoardErrors = () => ({
    type: CLEAR_BOARD_ERRORS
});

export const fetchBoards = () => dispatch => (
    BoardAPIUtil.fetchBoards()
        .then( boards => dispatch(receiveBoards(boards)))
);

export const fetchBoard = boardId => dispatch => (
    BoardAPIUtil.fetchBoard(boardId)
        .then( board => dispatch(receiveBoard(board)))
);

export const createBoard = board => dispatch => (
    BoardAPIUtil.createBoard(board)
        .then( board => { 
            dispatch(receiveBoard(board));
            dispatch(clearBoardErrors())},
            errors => dispatch(receiveBoardErrors(errors.responseJSON))
        )
);

export const updateBoard = board => dispatch => (
    BoardAPIUtil.updateBoard(board)
        .then( board => dispatch(receiveBoard(board)))
);

export const destroyBoard = board => dispatch => (
    BoardAPIUtil.destroyBoard(board)
        .then( board => dispatch(removeBoard(board)))
);