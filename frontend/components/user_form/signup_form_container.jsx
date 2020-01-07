import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import UserForm from '../user_form/user_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Log In
      </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);