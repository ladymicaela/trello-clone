import React from 'react';
import { connect } from 'react-redux';
import { destroyBoard } from '../../actions/board_actions';
import DestroyBoard from './destroy_board';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    // board: state.entities.boards[ownProps.match.params.boardId],
    board: state.board,
    errors: state.errors.boardErrors
});

const mapDispatchToProps = dispatch => ({
    action: board => dispatch(destroyBoard(board)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(DestroyBoard);