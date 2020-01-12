import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, destroyBoard } from '../../actions/board_actions';
import { fetchLists } from '../../actions/list_actions';
import { openModalWithItem } from '../../actions/modal_actions';
import React from 'react';


const mapStateToProps = ( state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    members: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    destroyBoard: board => dispatch(destroyBoard(board)),
    fetchLists: () => dispatch(fetchLists()),
    openModalWithItem: (modal,item) => dispatch(openModalWithItem(modal,item))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);