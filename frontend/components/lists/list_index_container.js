import { connect } from 'react-redux';
import { openModal, openModalWithItem } from '../../actions/modal_actions';
import ListIndex from './list_index';

import { fetchLists } from '../../actions/list_actions';

const mapStateToProps = state => ({
    lists: Object.values(state.entities.lists)
});

const mapDispatchToProps = dispatch => ({
    fetchLists: () => dispatch(fetchLists()),
    openModal: modal => dispatch(openModal(modal)),
    openModalWithItem: (modal, item) => dispatch(openModalWithItem(modal, item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);