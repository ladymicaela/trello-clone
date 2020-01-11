import React from 'react';
import { connect } from 'react-redux';
import { createList, fetchLists } from '../../actions/list_actions';
import ListForm from './list_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    list: {
        title: ""
    },
    formType: "Create List",
    errors: state.errors.listErrors
});

const mapDispatchToProps = dispatch => ({
    action: list => dispatch(createList(list)),
    otherForm: (
        <button onClick={() => dispatch(openModal('create-list'))}>
            Create List
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    fetchLists: () => dispatch(fetchLists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
