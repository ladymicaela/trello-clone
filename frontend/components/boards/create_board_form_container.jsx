import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

const mapStateToProps = state => ({
    board: {
        title: ""
    },
    formType: "Create Board"
});

const mapDispatchToProps = dispatch => ({
    action: board => dispatch(createBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);