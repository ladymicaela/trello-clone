import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import BoardIndex from './board_index';

import { fetchBoards } from '../../actions/board_actions';

const mapStateToProps = state => ({
    boards: Object.values(state.entities.boards)
});

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);