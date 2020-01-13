import React from 'react';
import { connect } from 'react-redux';
import { createList, fetchLists } from '../../actions/list_actions';
import ListForm from './list_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let pathname = ownProps.location.pathname
    return {
    list: {
        title: ""
    },
    formType: "Create List",
    errors: state.errors.listErrors,
    boardId: pathname[pathname.length-1]
}};

const mapDispatchToProps = dispatch => ({
    action: list => dispatch(createList(list)),
    otherForm: (
        <button onClick={() => dispatch(openModal('create-list'))}>
            Create List
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchLists: (boardId) => dispatch(fetchLists(boardId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm));
