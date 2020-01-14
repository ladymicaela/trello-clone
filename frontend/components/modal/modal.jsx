import React from 'react';
import { closeModal, OPEN_MODAL, OPEN_MODAL_WITH_ITEM } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../signup_form/signup_form_container';
import CreateBoardFormContainer from '../boards/create_board_form_container';
import CreateListFormContainer from '../lists/create_list_form_container';
import EditListFormContainer from '../lists/edit_list_form_container';
import DestroyBoardContainer from '../boards/destroy_board_container';
import CreateCardFormContainer from '../cards/create_card_form_container';
import CardShowContainer from '../cards/card_show_container';

function Modal({ modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'create-board':
            component = <CreateBoardFormContainer />
            break;
        case 'destroy-board':
            component = <DestroyBoardContainer board={modal.item}/>
            break;
        case 'create-list':
            component = <CreateListFormContainer />
            break;
        case 'create-card':
            component = <CreateCardFormContainer />
            break;
        case 'show-card':
            component = <CardShowContainer card={modal.item} />
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
