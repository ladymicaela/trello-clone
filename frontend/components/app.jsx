import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionContainer from './session/session_container';
import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './login_form/login_form_container';

import Modal from './modal/modal';

import BoardIndexContainer from "./boards/board_index_container";
import BoardShowContainer from "./boards/board_show_container";

const App = () => (
    <div>
        <Modal />
        <header>
            <SessionContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/boards" component={BoardIndexContainer} />
            <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
        </Switch>
    </div>
);

export default App;