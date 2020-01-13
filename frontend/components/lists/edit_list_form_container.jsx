import { connect } from 'react-redux';
import { fetchList, updateList, fetchLists } from '../../actions/list_actions';
import EditListForm from './edit_list_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = ( state, ownProps ) => {
    let pathname = ownProps.location.pathname
    return {
    list: state.ui.modal.item,
    formType: 'Edit List',
    errors: state.errors.listErrors,
    boardId: pathname[pathname.length - 1]
}};

const mapDispatchToProps = dispatch => ({
    fetchList: listId => dispatch(fetchList(listId)),
    action: list => dispatch(updateList(list)),
    closeModal: () => dispatch(closeModal()),
    fetchLists: boardId => dispatch(fetchLists(boardId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditListForm));