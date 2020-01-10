import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, destroyBoard } from '../../actions/board_actions';

const mapStateToProps = ( state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    members: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    destroyBoard: board => dispatch(destroyBoard(board))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);