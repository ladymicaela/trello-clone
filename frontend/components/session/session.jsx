import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns } from '@fortawesome/free-solid-svg-icons'


const Session = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="sessionNav">
            <div className="sessionLogo">
                <FontAwesomeIcon icon={faColumns} className="logo" />
                <span>R2DToDo</span>
            </div>
            <nav className="sessionLinksNav">
                <button className="login-signup" onClick={() => openModal('login')}>Login</button>
                <button className="login-signup" onClick={() => openModal('signup')}>Signup</button>
            </nav>
        </div>
    );
    const welcomeSession = () => (
        <hgroup className="header-group">
            <button className="header-button" onClick={logout}>Log Out</button>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
        </hgroup>
    );

    return currentUser ? welcomeSession(currentUser, logout) : sessionLinks();
};


export default Session;