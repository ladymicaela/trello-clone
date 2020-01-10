import React from "react";

const Splash = () => {
    return (
        <div className="splash">
            <div className="splash-text">
                <h1>R2DToDo lets you work more collaboratively and get more done.</h1>
                <p>R2DToDo's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
            </div>
            <div className="hero-image">
                <img src={window.r2d2URL}/>
                <img src={window.c3poURL}/>
            </div>
        </div>
    )
};

export default Splash;