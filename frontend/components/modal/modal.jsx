import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../signup_form/signup_form_container';
import CreateBoardFormContainer from '../boards/create_board_form_container';
import CreateListFormContainer from '../lists/create_list_form_container';
import EditListFormContainer from '../lists/edit_list_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'create-board':
            component = <CreateBoardFormContainer />
            break;
        case 'create-list':
            component = <CreateListFormContainer />
            break;
        case 'edit-list':
            component = <EditListFormContainer list={modal.item}/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
