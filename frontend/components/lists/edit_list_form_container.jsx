import { connect } from 'react-redux';
import { fetchList, updateList } from '../../actions/list_actions';
import EditListForm from './edit_list_form';


const mapStateToProps = ( state, ownProps ) => ({
    list: state.lists[ownProps.list.id],
    formType: 'Update List'
});

const mapDispatchToProps = dispatch => ({
    fetchList: listId => dispatch(fetchList(listId)),
    action: list => dispatch(updateList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditListForm);