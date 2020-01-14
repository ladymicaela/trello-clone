import React from "react";

import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionContainer from './session/session_container';

import Modal from './modal/modal';

import Splash from './splash';

import Footer from './footer';

import BoardIndexContainer from "./boards/board_index_container";
import BoardShowContainer from "./boards/board_show_container";

import CardShowContainer from "./cards/card_show_container";

const App = () => (
    <div>
        <Modal />
        <header>
            <SessionContainer />
        </header>
        <Switch>
            <ProtectedRoute exact path="/boards" component={BoardIndexContainer} />
            <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
            <AuthRoute path="/" component={Splash} />
            <ProtectedRoute path="/" component={BoardIndexContainer} />
        </Switch>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;