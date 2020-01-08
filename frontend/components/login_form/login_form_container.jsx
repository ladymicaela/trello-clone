import { connect } from 'react-redux';
import React from 'react';
import LoginForm from './login_form';
import { login, receiveDemoUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign Up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        receiveDemoUser: () => dispatch(receiveDemoUser)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);