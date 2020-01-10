import React from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchBoards } from '../../actions/board_actions';

const mapStateToProps = state => ({
    board: {
        title: ""
    },
    formType: "Create Board",
    errors: state.errors.boardErrors
});

const mapDispatchToProps = dispatch => ({
    action: board => dispatch(createBoard(board)),
    otherForm: (
        <button onClick={() => dispatch(openModal('create-board'))}>
            Create Board
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchBoards: () => dispatch(fetchBoards())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);