import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, destroyBoard } from '../../actions/board_actions';
import { fetchLists } from '../../actions/list_actions';

const mapStateToProps = ( state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    members: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    destroyBoard: board => dispatch(destroyBoard(board)),
    fetchLists: () => dispatch(fetchLists())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);