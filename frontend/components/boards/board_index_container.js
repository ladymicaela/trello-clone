import { connect } from 'react-redux';

import BoardIndex from './board_index';

import { fetchBoards } from '../../actions/board_actions';

const mapStateToProps = state => ({
    boards: Object.values(state.entities.boards)
});

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);