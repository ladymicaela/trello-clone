import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrello } from '@fortawesome/free-brands-svg-icons'


const Session = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="session-nav">
            <div className="session-logo">
                <FontAwesomeIcon icon={faTrello} className="logo" />
                <span>R2DToDo</span>
            </div>
            <nav className="session-links-nav">
                <button className="login-signup" onClick={() => openModal('login')}>Login</button>
                <button className="login-signup" onClick={() => openModal('signup')}>Signup</button>
            </nav>
        </div>
    );
    const welcomeSession = () => (
        <hgroup className="header-group">
            <Link to='/boards' className='logo-home'><i className="fas fa-home"></i></Link>
            <div className="header-logo-box">
                <FontAwesomeIcon icon={faTrello} className="logo" />
                <span>R2DToDo</span>
            </div>
            <div className="header-session-box">
                <h2 className="header-name">{currentUser.username}</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>

        </hgroup>
    );

    return currentUser ? welcomeSession(currentUser, logout) : sessionLinks();
};


export default Session;