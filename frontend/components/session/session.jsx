import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns } from '@fortawesome/free-solid-svg-icons'


const Session = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="sessionNav">
            <div className="sessionLogo">
                <FontAwesomeIcon icon={faColumns} className="logo" />
                <span>R2DToDo</span>
            </div>
            <nav className="sessionLinksNav">
                <Link to="/login" className="login-signup">Log In</Link>
                <Link to="/signup" className="login-signup">Sign Up</Link>
            </nav>
        </div>
    );
    const welcomeSession = () => (
        <hgroup className="header-group">
            <button className="header-button" onClick={logout}>Log Out</button>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
        </hgroup>
    );

    return currentUser ? welcomeSession() : sessionLinks();
};


export default Session;