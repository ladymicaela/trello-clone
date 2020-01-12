import { connect } from 'react-redux';
import { openModal, openModalWithItem } from '../../actions/modal_actions';
import ListIndex from './list_index';

import { fetchLists, destroyList } from '../../actions/list_actions';

const mapStateToProps = state => ({
    lists: Object.values(state.entities.lists)
});

const mapDispatchToProps = dispatch => ({
    fetchLists: () => dispatch(fetchLists()),
    openModal: modal => dispatch(openModal(modal)),
    openModalWithItem: (modal, item) => dispatch(openModalWithItem(modal, item)),
    destroyList: list => dispatch(destroyList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);