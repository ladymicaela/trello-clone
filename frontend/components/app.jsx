import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import {AuthRoute} from '../util/route_util';

import SessionContainer from './session/session_container';
import SignUpFormContainer from './user_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <SessionContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;